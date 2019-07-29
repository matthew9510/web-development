
const templateLiteralTests = {

  resultIsAString: function(fn) {
    test('your function does not return a string', () => {
      const RESULT = fn();
      expect(typeof(RESULT), `your function returned a ${typeof Result}, but we are expeting a string`).toBe('string');
    });
  },
  resultIsTemplateLiteral: function(fn) {
    test('the string should use template literal syntax', () => {
      expect(fn.toString().includes('`'), `Make sure your function is returning a string that does not include ' and "`).toBe(true)
    })
  },
  resultUsesStringInterpolation: function(fn) {
    test('Your string is still using the "+" and concatenation', () => {
      expect(fn.toString().includes('+'), `Your function is still utilizing '+', the final answer does not use '+.'`).toBe(false)
    })
  },

};

module.exports = templateLiteralTests