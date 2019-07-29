//Complete the below function to output a string using template literals. The string should read: The second item in this array is _____.
//Make use of interpolation to include the 2nd item from the array input in place of ____. Ex.  The second item in the array is orange.

const stringWithArray = (array) => {
    return `The second item in this array is ${array[1]}.`
};

//Do not edit
module.exports = stringWithArray;