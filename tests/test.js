const prependZero = require('../client/index.js').prependZero;
const renderTime = require('../client/index.js').renderTime;

test('correctly prepends 0 to a number if less than 10', () => {
  expect(prependZero(5)).toBe('05');
});

test('returns number if 10 or greater', () => {
  expect(prependZero(10)).toBe(10);
  expect(prependZero(24)).toBe(24);
});