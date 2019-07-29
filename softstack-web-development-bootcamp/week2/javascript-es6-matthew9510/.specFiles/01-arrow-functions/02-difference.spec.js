const difference = require('../../challenges/01-arrow-functions/02-difference');
const ArrowFunctionTests = require('./arrow-functions-general')

test('adds 1 + 2 to equal 3', () => {
    expect(difference(1, 2)).toBe(-1);
});
ArrowFunctionTests.usesArrowTest(difference, 'difference');
ArrowFunctionTests.usesImplicitReturn(difference, 'difference');