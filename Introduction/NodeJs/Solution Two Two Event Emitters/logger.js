const EventEmitter = require('events'); // class 
// const emitter = new EventEmitter();  // delete because of the extension, this. will be used now 

//function log(message){
//    console.log(message)  
//    
//    emitter.emit("messageLogged", {id: 1,  url: 'http://'})
//    this.emit("messageLogged", {id: 1,  url: 'http://'})
//}

// module.exports = log;  // instead of exporting the logger function we will export the logger class with all of the eventEmitter capabilities, i.e. using extends EventEmitter 


////////////
// Solution
class Logger extends EventEmitter{
    
    log(message){
        console.log(message)
        
        //emitter.emit("messageLogged", {id: 1,  url: 'http://'})
        this.emit("messageLogged", {id: 1,  url: 'http://'})
    }
}

module.exports = Logger;