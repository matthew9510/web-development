// ref - https://www.youtube.com/watch?v=CpmE5twq1h0&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=24

// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
    // this.move = "Hello"
  }
  
// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor. // Execute the constructor function of Shape, do what I do when I am a Shape
  //if you don't write this following line in the global scope, then the rest of this constructor function will not execute; Rectangle.prototype.constructor = Rectangle;
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype); // allows us to copy the properties the shape currently prototype has, in addition to when the new prototype is manipulated the changes don't effect shape's prototype
Rectangle.prototype.constructor = Rectangle; //If you don't set Object.prototype.constructor to Rectangle, 
                                            //it will take prototype.constructor of Shape (parent). 
                                           //To avoid that, we set the prototype.constructor to Rectangle (child).

var rect = new Rectangle();
console.log(rect, "rect")
console.log(typeof rect, "typeof rect")

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
  console.log("direct proto", Object.getPrototypeOf(rect));
rect.move(1, 1); // Outputs, 'Shape moved.'

var myshape = new Shape();
console.log(myshape.hasOwnProperty("move")); // false
myshape.move(1,1);
