const noParam = require('../../challenges/01-arrow-functions/06-noParam');
const ArrowFunctionTests = require('./arrow-functions-general')

ArrowFunctionTests.usesArrowTest(noParam, 'noParam');
test('noParam should return a string', () =>  {
  expect(typeof noParam()).toBe('string')
})