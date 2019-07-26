var http = require('http')
var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf8'); // split the data in chunks and store it in myReadStream variable
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt')

myReadStream.on('data', function(chunk){
    console.log("new chunk received", chunk)
    myWriteStream.write(chunk);
})
