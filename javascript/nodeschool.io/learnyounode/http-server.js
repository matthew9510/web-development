var http = require('http');
var fs = require('fs');
var bl = require('bl');

let port = process.argv[2];
let locationOfFile = process.argv[3];

let server = http.createServer((req,res)=> {
    res.writeHead(200, { 'content-type': 'text/html' })
    console.log("request was made", req.url);
    console.log("request headers", req.headers);
    let ReadInStream = fs.createReadStream(locationOfFile, 'utf8');
    ReadInStream.pipe(res);
})

server.listen(port);

/////////////////////
// official solution
// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))
