//Convert the string being returned by the below function to utilize template literal syntax.  Be sure to make use of string 
//interpolation

// const stringWithVariable = _ => {
//     const CITY = 'Defiance'; 
//     return 'Welcome to ' + CITY;
// };

const stringWithVariable = _ => {
    const CITY = 'Defiance';
    return `Welcome to ${CITY}`
}


//Do not edit
module.exports = stringWithVariable;