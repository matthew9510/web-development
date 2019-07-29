
const ArrowFunctionTests = {

  usesArrowTest: function(fn, name) {
    test(`${name} is not an arrow function`, ()=> {
      expect(fn.toString().includes('function')).toBe(false)
    }); 
  },
  usesImplicitReturn: function(fn, name) {
    test(`${name} should not have an explicit return statment`, ()=> {
      expect(fn.toString().includes('return')).toBe(false)
    });
  },
  doesNotUseParens: function(fn, name) {
    test(`${name} should have 1 paramater called num`, ()=>{
      expect(fn.toString().includes('num')).toBe(true)
    })
    test(`${name} should not have parentheses for 1 paramater`, ()=> {
      expect(fn.toString().includes('(num)')).toBe(false)
    });
  },
};

module.exports = ArrowFunctionTests;