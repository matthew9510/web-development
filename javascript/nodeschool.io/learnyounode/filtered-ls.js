var fs = require('fs');

var pathOfDirectory = process.argv[2];
var extensionType = process.argv[3]; // Note that the second argument will not come prefixed with a '.'

fs.readdir(pathOfDirectory, filterList);

function filterList(err, listOfFiles){
    if (err) return console.error(err);

    // why loop twice?
    listOfFiles.filter((fileName) => {
        var splitFileName = fileName.split(".");
        if(splitFileName[splitFileName.length - 1 ] == extensionType && splitFileName.length > 1) return true;
        else return false; 
    }).forEach(element => {
        //console.log(element)
    });
}

// -- official solution -- 
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
    if (path.extname(file) === ext) {
        console.log(file)
    }
    })
})


