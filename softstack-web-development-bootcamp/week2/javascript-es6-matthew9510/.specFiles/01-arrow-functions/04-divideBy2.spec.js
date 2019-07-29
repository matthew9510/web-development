const divideBy2 = require('../../challenges/01-arrow-functions/04-divideBy2');
const ArrowFunctionTests = require('./arrow-functions-general')

test('divides 30 by 2 to reach 15', () => {
  expect(divideBy2(30)).toBe(15);
});
ArrowFunctionTests.usesArrowTest(divideBy2, 'divideBy2');
ArrowFunctionTests.usesImplicitReturn(divideBy2, 'divideBy2');
ArrowFunctionTests.doesNotUseParens(divideBy2, 'divideBy2')