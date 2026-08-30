const assert = require('assert'); const test = require('node:test'); const multiply = require('./index.js'); test('add should return sum', () => { assert.strictEqual(multiply(2, 3), 6); });
