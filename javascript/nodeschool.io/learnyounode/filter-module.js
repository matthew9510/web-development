var fs = require('fs');
var path = require('path');

function filterDirectory(directory, extension, callback){
    fs.readdir(directory, (err, files) => {
        if (err) return callback(err)
        
        var filteredFiles = files.filter(file => {
            if (path.extname(file) === "." + extension) return true;
            return false;
        })
        callback(null, filteredFiles); //omit the return because the function is not returning anything
    })
}

var officialSolution = false;
if (officialSolution){
    var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }

}

module.exports = filterDirectory;
