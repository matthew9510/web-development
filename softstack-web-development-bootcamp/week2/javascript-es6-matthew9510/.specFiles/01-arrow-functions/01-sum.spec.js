const sum = require('../../challenges/01-arrow-functions/01-sum');
const ArrowFunctionTests = require('./arrow-functions-general')

test('adds 1 + 2 to equal 3', () => {
    const RESULT = sum(1,2);
    expect(sum(1, 2), `OOPS, your function returned ${RESULT} but should be 3!`).toBe(3);
});
ArrowFunctionTests.usesArrowTest(sum, 'sum');