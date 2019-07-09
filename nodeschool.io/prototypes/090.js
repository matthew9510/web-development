// -> Define two constructor functions: 'Robot' and 'Vehicle'
// -> When called with 'new', the Robot constructor function should return 
//    the implicit 'this'
// -> When called with 'new', the Vehicle constructor function should return 
//    an object of your own making, not the implicit 'this'.
function Robot(){
}

function Vehicle(){
	return {} // don't return the implictit 'this' obj
}

// ----- NOTES ------
// When we do this:

//     function Alien() {
//         this.kind = 'alien';
//     }
    
//     var zippy = new Alien();
//     zippy.kind; //=> 'alien'

// Behind the scenes it is like doing something like:

    function Alien() {
        var this = {}; // not valid JavaScript, just for illustration
        this.__proto__ = Alien.prototype;
    
        this.kind = 'alien';
    
        return this;
    }
Alien.prototype.speak = function(){
	
};

var albert = new Alien()
albert.speak()
// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:    Robot,
	Vehicle:  Vehicle
}
