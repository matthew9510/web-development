// Streams:
// Recieve data down a stream and fulling up a buffer,
// when that is full it sends a chunk of data, and we are manually 
// listening out for the data event when we receive a chunk of data.
// Then we get that data and we manually write it to a write stream 
// and send it somewhere else. It's a very manual process.

// Pipe:
// Can help us do the same task, take data from a read stream and 
// then pipe it into a write stream. Again we have data coming down the 
// stream, it fills up a buffer and sends a chunk of data out. But instead of 
// manually listening for that .on('data') event when we receive a chunk of data 
// the pipe automatically does that for us. Then it pipes it to the stream
// for us, the write stream that we want to send it to. 
// In conclusion: 
// - don't have to manually listen to data events
// - don't have to manually write to a write stream

// still need to create a read and write stream, the change is when we manually 
// listen to data events and writing to the stream. 

var http = require('http')
var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf8'); // split the data in chunks and store it in myReadStream variable
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt')

// Note: we can only use pipe on readable streams b/c we are piping from a readable 
// stream to a writable stream 
myReadStream.pipe(myWriteStream);


// Doing this with a server
var server = http.createServer(function(req,res){
    console.log("request was made:", req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    var myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf8');
    myReadStream.pipe(res); // we take read stream and we have piped it into the response stream, 
    //doing all the heavy lifting for us; listening for event and then whenever we get data streaming it to the user bit by bit, so they receive data quicker
    

    // res.end('End of response') // not needed, pipe does this for us
})

server.listen(3000, '127.0.0.1');
console.log("listening to port 3000")