var http = require('http');
var url = process.argv[2];

http.get(url, function (response) { // propograte the error message out 
    //this.emit('error', "inside but before try")
    //throw new Error("jfasdlfja")
    try{
        response.setEncoding('utf8')
        response.on('data', console.log)
        response.on('error', () => console.log("inside try"))
    }   
    catch(e){ 
        console.log(e)
    }
}).on('error', (err) => console.error)


/////////////////////
// Official solution
// var http = require('http')
    
// http.get(process.argv[2], function (response) {
//     response.setEncoding('utf8')
//     response.on('data', console.log)
//     response.on('error', console.error)
// }).on('error', console.error)
