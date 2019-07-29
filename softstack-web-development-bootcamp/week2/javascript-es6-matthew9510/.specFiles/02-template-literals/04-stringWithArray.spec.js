const stringWithArray = require('../../challenges/02-template-literals/04-stringWithArray');
const templateLiteralTests = require('./template-literals-general')

templateLiteralTests.resultIsTemplateLiteral(stringWithArray);
templateLiteralTests.resultUsesStringInterpolation(stringWithArray);
test('The returned string should include Leonardo, when given the input: ["Raphael", "Leonardo", "Michelangelo", "Donatello"]', () => {
  const TURTLES = ["Raphael", "Leonardo", "Michelangelo", "Donatello"];
  const RESULT = stringWithArray(TURTLES);
  expect(RESULT.includes('Leonardo'), `Your function returned:"${RESULT}" This does not include Leonardo from the given input`).toBe(true)
})
test('Should return the correct string with the second item from a given input array', () => {
  const EXPECTED = 'The second item in this array is Simmon.'
  const CHIPMUNKS = ['Alvin', 'Simmon', 'Theodore']
  const RESULT = stringWithArray(CHIPMUNKS)
  expect(RESULT, `Your function returned: ${RESULT} We are expecting ${EXPECTED}`).toEqual(EXPECTED)
})