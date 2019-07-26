// Note that the test file does not have a newline character ('\n') at the end of the last line,  
// so using this method you'll end up with an array that has one more element  
// than the number of newlines.  
var fs = require('fs'); 

var path = process.argv[2];
var buffer = fs.readFileSync(path);
var bufferAsStr = buffer.toString();

var numLines = 0;
for(var line of bufferAsStr.split("\n")){
    numLines++;
}
//console.log(numLines - 1);

//------------------------------------
// official solution: 
var fs = require('fs')
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)
