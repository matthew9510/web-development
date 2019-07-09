function getSumOfArgv(){
    var sum = 0;
    var argv = process.argv
    var startIndex = 2; // chosen due to how you run the .js program -> node fileName.js argv[2] argv[3] etc..
    for(var i = startIndex; i < argv.length; i++){
        sum += +argv[i] // same as -> sum += Number(argv[i])
    }
    console.log(sum);
}

getSumOfArgv();

// Official answer:
// var result = 0
// for (var i = 2; i < process.argv.length; i++) {
// result += Number(process.argv[i])
// } 
// console.log(result)
