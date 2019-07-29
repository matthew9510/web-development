//Complete the below function. It will be given 3 inputs, an array of objects, an index and a key. The function should output a 
//string that reads: The information you requested is ____.  Have a nice day!
//Make use of interpolation to include the property from the object at the requested array index in place of the ____.

const stringWithObject = (array, index, key) => {
    return `The information you requested is ${array[index][key]}.  Have a nice day!`
};









//Do not edit
module.exports = stringWithObject;
