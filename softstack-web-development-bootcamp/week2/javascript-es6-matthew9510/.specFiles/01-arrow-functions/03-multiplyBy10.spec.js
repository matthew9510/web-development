const multiplyBy10 = require('../../challenges/01-arrow-functions/03-multiplyBy10');
const ArrowFunctionTests = require('./arrow-functions-general')

test('multiplys 5 by 10 to reach 50', () => {
  expect(multiplyBy10(5)).toBe(50);
});
ArrowFunctionTests.usesArrowTest(multiplyBy10, 'multiplyBy10');
ArrowFunctionTests.usesImplicitReturn(multiplyBy10, 'multiplyBy10');
ArrowFunctionTests.doesNotUseParens(multiplyBy10, 'multiplyBy10')