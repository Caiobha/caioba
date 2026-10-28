const test = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('../src/index');

test('greets with provided name', () => {
  assert.equal(greet('Caiobha'), 'Hello, Caiobha!');
});

test('greets world by default', () => {
  assert.equal(greet(), 'Hello, world!');
});
