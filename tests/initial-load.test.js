// @ts-nocheck -- VM browser doubles intentionally implement only the APIs exercised here.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const template = readFileSync(new URL('../src/app.html', import.meta.url), 'utf8');
const script = template.match(/<script data-initial-load>([\s\S]*?)<\/script>/)?.[1];

assert.ok(script, 'initial-load script exists');

function createStorage(initial = {}) {
	const values = new Map(Object.entries(initial));
	return {
		getItem: (key) => values.get(key) ?? null,
		setItem: (key, value) => values.set(key, String(value)),
		value: (key) => values.get(key)
	};
}

function boot({ mode, splashComplete, reducedMotion = false, darkSystem = false } = {}) {
	const classes = new Set();
	const attributes = new Map();
	const timers = [];
	const shell = {
		inert: false,
		setAttribute: (key, value) => attributes.set(`shell:${key}`, value),
		removeAttribute: (key) => attributes.delete(`shell:${key}`)
	};
	const splash = {
		setAttribute: (key, value) => attributes.set(`splash:${key}`, value)
	};
	const localStorage = createStorage(mode ? { 'mode-watcher-mode': mode } : {});
	const sessionStorage = createStorage(
		splashComplete ? { 'cogon-splash-complete': 'true' } : {}
	);
	let now = 0;
	const root = {
		classList: { toggle: (name, force) => (force ? classes.add(name) : classes.delete(name)) },
		style: {},
		dataset: {}
	};
	const window = {};
	const context = {
		window,
		document: {
			documentElement: root,
			getElementById: (id) => (id === 'app-shell' ? shell : id === 'initial-splash' ? splash : null)
		},
		localStorage,
		sessionStorage,
		performance: { now: () => now },
		matchMedia: (query) => ({
			matches: query.includes('reduced-motion') ? reducedMotion : darkSystem
		}),
		setTimeout: (callback, delay) => {
			timers.push({ callback, delay });
			return timers.length;
		},
		clearTimeout: () => {}
	};

	vm.runInNewContext(script, context);
	return {
		attributes,
		classes,
		localStorage,
		root,
		sessionStorage,
		shell,
		timers,
		window,
		setNow: (value) => (now = value)
	};
}

test('applies a persisted dark theme before the app starts', () => {
	const state = boot({ mode: 'dark', splashComplete: true });

	assert.equal(state.classes.has('dark'), true);
	assert.equal(state.root.style.colorScheme, 'dark');
	assert.equal(state.localStorage.value('mode-watcher-mode'), 'dark');
	assert.equal(state.root.dataset.splash, 'done');
});

test('applies a persisted light theme before the app starts', () => {
	const state = boot({ mode: 'light', splashComplete: true, darkSystem: true });

	assert.equal(state.classes.has('dark'), false);
	assert.equal(state.root.style.colorScheme, 'light');
	assert.equal(state.localStorage.value('mode-watcher-mode'), 'light');
});

test('uses the system theme when no explicit preference exists', () => {
	const state = boot({ darkSystem: true, splashComplete: true });

	assert.equal(state.classes.has('dark'), true);
	assert.equal(state.localStorage.value('mode-watcher-mode'), 'system');
});

test('gates a fresh session until readiness and the minimum duration', () => {
	const state = boot();
	state.window.__cogonSyncSplash();

	assert.equal(state.root.dataset.splash, 'active');
	assert.equal(state.shell.inert, true);
	assert.equal(state.attributes.get('shell:aria-hidden'), 'true');

	state.setNow(400);
	state.window.__cogonReleaseSplash();
	const minimumTimer = state.timers.find((timer) => timer.delay === 1000);
	assert.ok(minimumTimer);
	minimumTimer.callback();

	assert.equal(state.root.dataset.splash, 'releasing');
	assert.equal(state.sessionStorage.value('cogon-splash-complete'), 'true');
	state.timers.find((timer) => timer.delay === 260)?.callback();
	assert.equal(state.root.dataset.splash, 'done');
	assert.equal(state.shell.inert, false);
	assert.equal(state.attributes.has('shell:aria-hidden'), false);
});

test('skips the splash on reload and removes the accessibility gate', () => {
	const state = boot({ splashComplete: true });
	state.window.__cogonSyncSplash();

	assert.equal(state.root.dataset.splash, 'done');
	assert.equal(state.shell.inert, false);
	assert.equal(state.attributes.get('splash:aria-hidden'), 'true');
});

test('maximum timeout force-releases a stalled app', () => {
	const state = boot();
	state.window.__cogonSyncSplash();
	state.timers.find((timer) => timer.delay === 8000)?.callback();

	assert.equal(state.root.dataset.splash, 'done');
	assert.equal(state.shell.inert, false);
	assert.equal(state.sessionStorage.value('cogon-splash-complete'), 'true');
});

test('reduced motion preserves the gate without a fade', () => {
	const state = boot({ reducedMotion: true });
	state.setNow(1400);
	state.window.__cogonReleaseSplash();

	assert.equal(state.root.dataset.splash, 'done');
	assert.equal(state.timers.some((timer) => timer.delay === 260), false);
});
