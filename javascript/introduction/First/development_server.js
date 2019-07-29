var http = require('http'); //comes with node js automatically , standard way of importing packages in node js

http.createServer(function (req, res) {
    res.end('hello world!'); // what gets displayed on our local host
});

server.listen('8000'); // tell the server where to listen ('8000')  is the local host port
console.log('This server listens to port localhost:8000');

