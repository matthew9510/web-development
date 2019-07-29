const EventEmitter = require('events'); // class 
const emitter = new EventEmitter(); // object 
var log = require("./logger")

emitter.on('messageLogged', (arg) => { 
    console.log("Listener called", arg)
}) 

log("Some message") // note the above listener will not be triggered because inside the logger.js file, we are working with two different event emitters in both files

// Solution: 
// create a class that has all the capabilities of the EventEmitter but it has additional capabilities In our case create a class Logger that has the log function as an addition method