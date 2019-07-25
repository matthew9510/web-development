var filterDirectory = require("./filter-module") // .js is omitted
var pathOfDirectory = process.argv[2];
var extensionType = process.argv[3]; // Note that the second argument will not come prefixed with a '.'

filterDirectory(pathOfDirectory, extensionType, afterFilteringDoThis)

function afterFilteringDoThis(err, filteredList){
    if (err) return console.error(err);  // return so that nothing else gets executed, the function stops running
    filteredList.forEach(file => {console.log(file)})
}


/////////////////////////
// Actual Solution 
var officialSolution = false
if (officialSolution){ 
    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
    if (err) {
        return console.error('There was an error:', err)
    }

    list.forEach(function (file) {
        console.log(file)
    })
    })
}
