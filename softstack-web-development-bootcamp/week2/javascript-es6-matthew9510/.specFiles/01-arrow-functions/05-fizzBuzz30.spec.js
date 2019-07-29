const fizzBuzz30 = require('../../challenges/01-arrow-functions/05-fizzBuzz30');
const ArrowFunctionTests = require('./arrow-functions-general')

test('fizzBuzz30 should return an array', () => {
  expect(Array.isArray(fizzBuzz30())).toBe(true);
});
ArrowFunctionTests.usesArrowTest(fizzBuzz30, 'fizzBuzz30');
test('the number 15 was not replaced with fizzbuzz', () => {
  const RESULT = fizzBuzz30()
  console.log(RESULT)
  expect(RESULT[14]).toBe('fizzbuzz');
});