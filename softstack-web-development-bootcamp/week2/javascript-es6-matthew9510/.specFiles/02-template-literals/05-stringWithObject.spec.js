const stringWithObject = require('../../challenges/02-template-literals/05-stringWithObject');
const templateLiteralTests = require('./template-literals-general')

templateLiteralTests.resultIsTemplateLiteral(stringWithObject);
templateLiteralTests.resultUsesStringInterpolation(stringWithObject);
test('Should return the correct string based on a given input', () => {
  const EXPECTED = 'The information you requested is Lord of the Rings.  Have a nice day!'
  const AWESOME_FILMS = [{title: "The Matrix"}, {title: "Lord of the Rings"}]
  const RESULT = stringWithObject(AWESOME_FILMS, 1, 'title')
  expect(RESULT, `Your function returned: ${RESULT} We are expecting ${EXPECTED}`).toEqual(EXPECTED)
})