var http = require('http')
var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf8'); // split the data in chunks and store it in myReadStream variable

//createReadStream inherits from the eventemitter, the event .data is triggered when a new chunk of data is available 

myReadStream.on('data', function(chunk){
    console.log("new chunk received", chunk)
})

// new chunk recieved <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 61 74 20 6e 65 71 75 65 20 69 6e 63 65 70 74 6f 73 20 6a 75 73 74 6f 20 70 6f 72 74 74 69 74 6f 72 20 68 65 6e 64 ... >
// new chunk recieved <Buffer 75 6c 76 69 6e 61 72 20 6e 65 63 20 76 65 6e 65 6e 61 74 69 73 20 70 65 6c 6c 65 6e 74 65 73 71 75 65 20 6e 69 62 68 20 71 75 69 73 20 66 75 73 63 65 ... >
// Note: the chunk itself is a buffer object 

// fs.readfile() takes a long time ebcause it waits until it stores all of the data in memory and then it executes the callback, we get all the data in one big piece.
