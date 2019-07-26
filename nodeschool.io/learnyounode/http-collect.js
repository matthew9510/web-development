var http = require('http');
var bl = require('bl')
var url = process.argv[2];

http.get(url, (response)=>{
    let allData = "";
    try{
        response.setEncoding('utf8'); 
        response.on('data', (data) => allData += data)
        response.on('end', ()=>{ 
            console.log(allData.length); // number of characters
            console.log(allData)
        })
        response.on('error', (error)=> console.error)
    }
    catch(e){
        console.error("error occurred:", e);    
    }
}).on('error', (error)=>{console.error(error); console.log("Qbubble up")})

//emitter.on('error', (error)=> console.log('Rar!'))

/////////////////////
// Official solution
// var http = require('http')
// var bl = require('bl')
    
// http.get(process.argv[2], function (response) {
//     response.pipe(bl(function (err, data) { 
//     if (err) {
//         return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//     }))
// })

// Both bl and concat-stream can have a stream piped in to them and they will  
// collect the data for you. Once the stream has ended, a callback will be  
// fired with the data: 