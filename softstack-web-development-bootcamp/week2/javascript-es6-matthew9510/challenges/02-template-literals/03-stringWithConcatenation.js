//Convert the string being returned by the below function to utilize template literal syntax.  Be sure to make use of string 
//interpolation

// const stringWithConcatenation = _ => {
//     const FIRST_NAME = 'Inigo';
//     const LAST_NAME = 'Montoya';
//     return 'Hello! My name is ' + FIRST_NAME + ' ' + LAST_NAME + '! You killed my father. Prepare to die!';
// };

const stringWithConcatenation = _ => {
    const FIRST_NAME = 'Inigo';
    const LAST_NAME = 'Montoya';
    return `Hello! My name is ${FIRST_NAME} ${LAST_NAME}! You killed my father. Prepare to die.`
}




//Do not edit
module.exports = stringWithConcatenation;
