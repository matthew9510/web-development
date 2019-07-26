const EventEmitter = require('events'); // class 
const emitter = new EventEmitter(); // object 

// Event listeners and event emitters 
// Note: order matters, you need to create a listener before you raise an event, because emitter will iterate over all the registered listeners and calls them synchronously 

// Register listener, will be called when a particular event has been raised
emitter.on('nameOfEventToListenTo', function(){
    console.log("this will be called when an event is raised ")
})

emitter.on('messageLogged', function(){
    console.log("this will be called when an event is raised ")
})

// Raise event, note: emitter.addListener === emitter.on // .on is an alias 
emitter.emit("messageLogged") // used to raise an event - making a noise, produce - signaling someting happened


// You can also pass data about an event 
emitter.on('messageLogged', (arg) => { 
    console.log("Listener called", arg)
}) 

emitter.emit("messageLogged", {id:1, url:"http://someurl"})