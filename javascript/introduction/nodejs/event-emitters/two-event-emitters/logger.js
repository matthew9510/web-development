const EventEmitter = require('events'); // class 
const emitter = new EventEmitter(); 

function log(message){
    console.log(message)
    
    emitter.emit("messageLogged", {id: 1,  url: 'http://'})
}

module.exports = log;
