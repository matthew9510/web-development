// single line comment

/* Multiline 
Comment */

// statements can be terminated by ;
//doStuff();

// ... but they don't have to be, as semicolons are automatically inserted
// wherever there's a newline, except in certain cases.
//doStuff()

/* Because those cases can cause unexpected results, we'll keep on using
semicolons in this guide. */


///////////////////////////////////
// 1. Numbers, Strings and Operators

// JavaScript has one number type (which is a 64-bit IEEE 754 double).
// Doubles have a 52-bit mantissa, which is enough to store integers
// up to about 9✕10¹⁵ precisely.
3;
1.5;

// Some basic arithmeticwordks as you'd expect
1 + 1; // = 2 
0.1 + 0.2; // = 0.30000000000000004
8 - 1; // = 7
10 * 2; // = 20
35 / 5; // = 7
// Including uneven division.
5 / 2; // = 2.5

// Bitwise operations also work; when you perform a bitwise operation your float
// is converted to a signed int *up to* 32 bits.
1 << 2; // = 4

// Precedence is enforced with parentheses.
(1 + 3) * 2; // = 8

// There are three special not-a-real-number values:
Infinity; // result of e.g. 1/0
-Infinity; // result of e.g. -1/0
NaN; // result of e.g. 0/0, stands for 'Not a Number'

// There's also a boolean type.
true;
false;

// Strings are created with ' or ".
'abc';
"Hello, world";

// Negation uses the ! symbol
!true; // = false
!false; // = true

// Equality is ===
1 === 1; // = true 
2 === 1; // = false 

// Inequality is !==
1 !== 1; // false
2 !== 1 // true

// More comparisons
1 < 10; // = true
1 > 10; // = false
2 <= 2; // = true
2 >= 2; // = true

// Strings are concatenated with + 
"Hello " + "world!"; // = "Hello world!"

// ... which works with more than just strings // Due to type cohersion
"1, 2, " + 3; // = "1, 2, 3"
"Hello " + ["world", "!"]; // = "Hello world, !"

// and are compared with < and >
"a" < "b"; // = true
!("a" > "b"); // = true

// Type coercion is performed for comparisons with double equals...
"5" == 5; // = true
null == undefined; // = true

// ...which can result in some weird behaviour...
13 + !0; // 14
"13" + !0; // '13true'

// You can access characters in a string with `charAt`
"This is a string".charAt(0);  // = 'T'

// ...or use `substring` to get larger pieces. // note: stop is excluded 
"Hello world".substring(0, 5); // = "Hello"

// 'length' is a property, so don't use ().
"hello".length // = 5

// There's also `null` and `undefined`.
null;      // used to indicate a deliberate non-value
undefined; // used to indicate a value is not currently present (although `undefined` is actually a value itself)

var x;
x; // = undefined
x === undefined; // = true

// false, null, undefined, NaN, 0 and "" are falsy; everything else is truthy.
// Note that 0 is falsy and "0" is truthy, even though 0 == "0"; think (===) value


///////////////////////////////////
// 2. Variables, Arrays and Objects

// Variables are declared with the `var` keyword. JavaScript is dynamically
// typed, so you don't need to specify type. Assignment uses a single `=` character.
var someVar = 5;

// If you leave the var keyword off, you won't get an error...
someOtherVar = 10;

// ...but your variable will be created in the global scope, not in the scope you defined it in.

// Variables declared without being assigned to are set to undefined.
var someThirdVar; // = undefined

// If you want to declare a couple of variables, then you could use a comma
// separator
var someFourthVar = 2, someFifthVar = 4;

// There's shorthand for performing math operations on variables:
someVar += 5; // equivalent to someVar = someVar + 5; someVar is 10 now
someVar *= 10; // now someVar is 100

// and an even-shorter-hand for adding or subtracting 1
someVar++; // now someVar is 101
someVar--; // back to 100

// Arrays are ordered lists of values, of any type.
var myArray = ["Hello", 45, true];

// Their members can be accessed using the square-brackets subscript syntax.
// Array indices start at zero.
myArray[1]; // = 45

// Arrays are mutable and of variable length.
myArray.push("World"); // myArray == 
myArray.length; // = 4

// Add/Modify at specific index
myArray[3] = "Hello";


// Add and remove element from front or back end of an array
// Add as the first element 
myArray.unshift(3)  // note: returns length of array // myArray == [ 3, 'Hello', 45, true, 'Hello' ]
var someVar = myArray.shift(); // Remove first element and return it // someVar === 3;  myArray == [ 'Hello', 45, true, 'Hello' ]
myArray.push(3); // Add as the last element
someVar = myArray.pop(); // Remove last element and return it


// Join all elements of an array with semicolon
var myArray0 = [32,false,"js",12,56,90];
myArray0.join(";") // = "32;false;js;12;56;90"

// Get subarray of elements from index 1 (include) to 4 (exclude)
myArray0.slice(1,4) // = [false,"js",12]

// splice(start: number, deleteCount: number, ... new items:) - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// Remove 4 elements starting from index 2, and insert new elements 
// "hi", "wr", "ld"; return remove subarray
var subArray = myArray0.splice(2, 4, "hi", "wr", "ld"); // subArray == ["js", 12, 56, 90] ; myArray0 == [32, false, "hi", "wr", "ld"]


// JavaScript's objects are equivalent to "dictionaries" or "maps" in other
// languages: an unordered collection of key-value pairs.
var myObj = {key1: "Hello", key2: "World"}; //myObj == { key1: 'Hello', key2: 'World' } ; typeof key1 == undefined ; key1 == Error key1 not defined

// Keys are strings, but quotes aren't required if they're a valid
// JavaScript identifier. Values can be any type.
var myObj = {myKey: "myValue", "my other key": 4};

// Object attributes can also be accessed using the subscript syntax,
myObj["my other key"]; // = 4

// ... or using the dot syntax, provided the key is a valid identifier.
myObj.myKey; // = "myValue" 

// Objects are mutable; values can be changed and new keys added.
myObj.myThirdKey = true;

// If you try to access a value that's not yet set, you'll get undefined.
myObj.myFourthKey; // = undefined

myObj["some other key"] = 6  //  myobj == { myKey: 'myValue','my other key': 4, myThirdKey: true, 'some other key': 6 }


///////////////////////////////////
// 3. Logic and Control Structures

// The `if` structure works as you'd expect.
var count = 1;
if (count == 3){
    // evaluated if count is 3
} else if (count == 4){
    // evaluated if count is 4
} else {
    // evaluated if it's not either 3 or 4
}

// As does `while`.
// while (true){
//     // An infinite loop!
// }
while(count != 3){
    count+= 1;
}

// Do-while loops are like while loops, except they always run at least once.
var input;
// do {
//     input = getInput();
// } while (!isValid(input));

// The `for` loop is the same as C and Java:
// initialization; continue condition; iteration.
for (var i = 0; i < 5; i++){
    // will run 5 times
}

// Breaking out of labeled loops is similar to Java; outer is a label, labels can be javascript identifier that is not a reserved word
outer:
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            break outer;
            // breaks out of outer loop instead of only the inner one
        }else{
            // console.log(i, j); // will print until: i=5 and j=4 then the loop will end 
        }
    }
}

var i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
         continue loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2"

for (var i = 0; i < 10; i++) {
    someLabel:
    for (var j = 0; j < 10; j++) {
        if (i == 5 && j ==5) {
            //continue; // the only values that won't print will be i === 5, j === 5; continue makes the most inner (nested) for loop go to the next iteration of the loop that it was currently at 
            break someLabel; // breaks the inner for loop
        } else{
            console.log(i, j); // will print until  i === 5 and j === 4; then will jump to i=6 and j=0 through i=9 and j=9
        }
    }
}

// The for/in statement allows iteration over properties of an object.
var description = "";
var person = {fname:"Paul", lname:"Ken", age:18};
for (var x in person){  // note: in order
    description += person[x] + " ";
} // description = 'Paul Ken 18 ' ; Note: 18 turns into a string 

var myPets = "";
var pets = ["cat", "dog", "hamster", "hedgehog"];
for (var pet of pets){
    myPets += pet + " ";
} // myPets = 'cat dog hamster hedgehog '

// && is logical and, || is logical or
if ( 1 == "1" && 0 == false){
    // statement will be evaluated because expression is true
}
if (1 === "1" || 0 == false){
    // statement will be evaluated because expression is true
}

// && and || "short circuit", which is useful for setting default values.
var person = {
    name: 'Jack',
    age: 34
  }
somePersonJob = person.job || 'unemployed';
// somePersonJob = 'unemployed'

var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';

var f = a || b || c || d || e; // f = 4; 
//a, b, c, all are assigned falsy values. When Logical OR sees a falsy value, it continues evaluating. Once it reaches variable d with a value of 4, the equation short-circuits and the value of 4 is saved to variable f.

// The `switch` statement checks for equality with `===`. Note: that type cohersion will not be performed.  
// Use 'break' after each case
// or the cases after the correct one will be executed too.
grade = 'B';
switch (grade) { // pass in a value to trigger a case in the switch statement, whether that value be passed by value or pased by reference. 
  case 'A':
    console.log("Great job");
    break;
  case 'B':
    console.log("OK job");
    break;
  case 'C':
    console.log("You can do better");
    break;
  default:
    console.log("Oy vey");
    break;
}


///////////////////////////////////
// 4. Functions, Scope and Closures

// JavaScript functions are declared with the `function` keyword.
function myFunction(thing){
    return thing.toUpperCase();
}
myFunction("foo"); // = "FOO"

// Note that the value to be returned must start on the same line as the
// `return` keyword, otherwise you'll always return `undefined` due to
// automatic semicolon insertion. Watch out for this when using Allman style.
function myFunction(){
    return // <- semicolon automatically inserted here
    {thisIsAn: 'object literal'};
}
myFunction(); // = undefined

// Rather use the following format
function myFunction(){
    return { 
        thisIsAn: 'object literal'
    };
}
myFunction(); // = { thisIsAn: 'object literal' } ; typeof dictionary

// JavaScript functions are first class objects, so they can be reassigned to
// different variable names and passed to other functions as arguments - for
// example, when supplying an event handler:
function myOtherFunction(){
    console.log("After 5 seconds");// this code will be called in 5 seconds' time
}
setTimeout(myOtherFunction, 5000);
// Note: setTimeout isn't part of the JS language, but is provided by browsers and Node.js.

// Function objects don't even have to be declared with a name - you can write
// an anonymous function definition directly into the arguments of another.
setTimeout(function(){
    console.log("After 6 seconds")// this code will be called in 5 seconds' time
}, 6000);

// JavaScript has function scope; functions get their own scope but other blocks do not.
if (true){
    var i = 5;
}
i; // = 5 - not undefined as you'd expect in a block-scoped language

// This has led to a common pattern of "immediately-executing anonymous
// functions", which prevent temporary variables from leaking into the global
// scope. The anonymous function with lexical scope enclosed within the Grouping Operator (). 
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
(function(){
    var temporary = 5;
    // We can access the global scope by assigning to the "global object", which
    // in a web browser is always `window`. The global object may have a
    // different name in non-browser environments such as Node.js.
    // window.permanent = 10; // for web browsers
    global.permanent = 10;
})();
try{
    console.log(temporary); // raises ReferenceError
}
catch(err) {
    console.log(err.message)
}
permanent; // = 10

// we can still return a value with immediately invoked functions 
var result = (function() { var temp = Math.PI})
console.log(result) // = 3.14 

// Lexical scoping
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
// init() creates a local variable called name and a function called displayName(). 
// The displayName() function is an inner function that is defined inside init() 
// and is only available within the body of the init() function. 
// Note that the displayName() function has no local variables of its own. 
// However, since inner functions have access to the variables of outer functions, 
// displayName() can access the variable name declared in the parent function, init().
//If displayName() were to have its own name local variable, it would use this.name instead.

// One of JavaScript's most powerful features is closures. If a function is
// defined inside another function, the inner function has access to all the
// outer function's variables, even after the outer function exits. 
function sayHelloInFiveSeconds(name){
    var prompt = "Hello, " + name + "!";
    // Inner functions are put in the local scope by default, as if they were
    // declared with `var`.
    function inner(){
        console.log(prompt);
    }
    setTimeout(inner, 5000);
    // setTimeout is asynchronous, so the sayHelloInFiveSeconds function will
    // exit immediately, and setTimeout will call inner afterwards. However,
    // because inner is "closed over" sayHelloInFiveSeconds, inner still has
    // access to the `prompt` variable when it is finally called.
}
sayHelloInFiveSeconds("Adam"); // will open a popup with "Hello, Adam!" in 5s

// One other thing you can do with closures is return the inner function by invoking
// the outer function before being executed.
function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName;
  }
var myFunc = init();
myFunc();

///////////////////////////////////
// 5. More about Objects; Constructors and Prototypes

// Objects can contain functions.
var myObj = {
    myFunc: function(){
        return "Hello world!";
    }
};
myObj.myFunc(); // = "Hello world!"

// Another way of doing the same thing as above
var myOtherObject = new Object();
myOtherObject.myFunc = function(){ return "Hello world!";}; 
myOtherObject.myFunc();


// When functions attached to an object are called, they can access the object
// they're attached to using the `this` keyword.
myObj = {
    myFunc: function(){
        return this.myString;
    },
    myString: "Hello world!"
};
myObj.myFunc(); // = "Hello world!"

// Most of the time, you would always define “this” or have it specifically included in a function. For instance, lets say you have an object, and you want to reference this object using a function
var matt = {
    name: "Matt"
   }
function sayTo(person, first, second){
    return first + " " + person.name + " " + second;
}
sayTo(matt, "Hi", "how are you?"); // = "Hi Matt how are you?"
// If invoked the sayTo function on Matt, with 2 arguments, it would invoke correctly

// Now, what if sayTo was defined a little differently?
function sayTo(first, second){
    return first + " " + this.name + " " + second;
}
sayTo(matt, "Hi", "how are you?"); // = "[Object] undefined Hi"; 
// The first argument, matt, goes to the first variable, “hi” goes to the second variable, and “how are you?” goes nowhere, and this.name is undefined, because this is NOT the object matt.
// The this when you console.log it, actually returns the global window object.

// What 'this' is set to has to do with how the function is called, not where
// it's defined. So, our function doesn't work if it isn't called in the
// context of the object.
var myFunc = myObj.myFunc;
myFunc(); // = undefined, b/c the contex of 'this' refers to the window (browser) / gobal (nodejs) object, and this object doesn't have the attribute 'mystring', in other words 'this' doesn't refer to the object that the function belongs originally anymore, the context is lost.

// Inversely, a function can be assigned to the object and gain access to it
// through `this`, even if it wasn't attached when it was defined.
var myOtherFunc = function(){
    return this.myString.toUpperCase();
};
myObj.myOtherFunc = myOtherFunc;
myObj.myOtherFunc(); // = "HELLO WORLD!"
try{
    console.log(myOtherFunc());
}
catch( err ){
    console.log("'this' refers to window(browser)/global(nodejs) object which doesn't have attribute 'myString'.");
}

// We can also specify a context for a function to execute in when we invoke it
// using `call` or `apply`. 
// Specifying context means to essentially force the value of 'this' to refer to the object being passed in
// Note: .call() is a function method, so you invoke it on a function reference
var anotherFunc = function(s1, s2){
    return this.myString + s1 + s2;
};
anotherFunc.call(myObj, " Hello sun!", " Hello moon!"); // = "Hello world! Hello sun! Hello moon!"
anotherFunc(" Hello sun!", " Hello moon!"); // = "undefined Hello sun! Hello moon!" ; undefined is printed because the context of 'this' refers to the window(browser)/global(nodejs) object, and that object doesn't hve the property '.myString'

// The `apply` function is nearly identical, but takes an array for an argument list.
anotherFunc.apply(myObj, [" Hello sun!", " Hello moon!"]); // = = "Hello world! Hello sun! Hello moon!"

// This is useful when working with a function that accepts a sequence of
// arguments and you want to pass an array.
Math.min(42, 6, 27); // = 6
Math.min([42, 6, 27]); // = NaN (uh-oh!)
console.log(Math.min.apply(Math, [42, 6, 27])); // = 6  // TODO: - check why Math is the context, https://stackoverflow.com/questions/2870015/math-min-apply0-array-why ; technically can pass in any object
console.log(Math.min(...[1,2,3])); // Using spread operator to do the same operation
console.log(Math); // native code, will print an empty object

// But, `call` and `apply` are only temporary. When we want it to stick, we can
// use `bind` which sets the value of 'this' and changes the function to a new function, but it doesn’t invoke the function.
// Note: Once you bind an objeect to a function with 'bind', you can not override it
var boundFunc = anotherFunc.bind(myObj);
console.log(boundFunc(" Hello Saturn!", " Hello Mars!")); // = "Hello World! Hello Saturn! Hello Mars!"
// If attributes from the bound object change so will the bound function functionality
myObj.myString = "Hello Space!"
console.log(boundFunc(" Hello Saturn!", " Hello Mars!")); // = "Hello Space! Hello Saturn! Hello Mars!"


// `bind` can also be used to partially apply (curry) a function. TODO: A curry function is a closure that accepts only 1 parameter.
var product = function(a, b){ 
    return a * b; 
    };
var doubler = product.bind(this, 2);  // Note 'this' is a reference to the window(browser)/global(nodejs) object. TODO: Why would we bind 'this' with the context of the window(browser)/global(nodejs), if we are not even refereing to this. inside the function body?
console.log(doubler(8)); // = 16

// When you call a function with the `new` keyword, a new object is created, and
// made available to the function via the `this` keyword. Functions designed to be
// called like that are called constructors, constructor names should be capitalized
var MyConstructor = function(){
    this.myNumber = 21;
    this.printNum = function(){
        console.log(this.myNumber);
    };
};

console.log("With out the 'new' keyword");
myNewObj = MyConstructor(); // = undefined, b/c there is no return type

try{
    myNewObj; // = undefined, b/c the function has no return type
    myNewObj.printNum(); // = .printNum() is undefined 
} catch(err){
    console.log("myNewObj is undefined because the function MyConstructor has no return type");
    console.log(err);
}
try{
    console.log("this.myNumber:", this.myNumber);
    console.log("this.printNum(); :", this.printNum());
} catch(err){
    console.log("When using nodejs to run this code, instead of using 'this.' we use 'global.' instead!");
    console.log(err);
    console.log("global.myNumber:", global.myNumber); 
    console.log("global.printNum(); :", global.printNum()); // = undefined because the function doesn't return anything but it will still console log the value of the myNumber property. Note: Another way to call this function with the same output is 'global.printNum.apply(global);'    
}
delete global.myNumber;
delete global.printNum;

console.log("With the 'new' keyword");
myNewObj = new MyConstructor(); // = {myNumber: 5}
console.log(myNewObj); // = MyConstructor { myNumber: 42, printNum: [Function] }
console.log(myNewObj.myNumber);
myNewObj.printNum();

try{
    console.log("this.myNumber:", this.myNumber);
    console.log("this.printNum(); :", this.printNum());
    console.log("global.myNumber:", global.myNumber); // undefined because the window/gloabl object doesn't have the 'myNumber' property 
    console.log("global.printNum(); :", global.printNum()); // = undefined because the function doesn't return anything and also nothing prints because there is no property 'printNum' on the window/global object  
} catch(err){
    console.log(err);
}


// Unlike most other popular object-oriented languages, JavaScript has no
// concept of 'instances' created from 'class' blueprints; instead, JavaScript
// combines instantiation and inheritance into a single concept: a 'prototype'.

// Every JavaScript object has a 'prototype'. When you go to access a property
// on an object that doesn't exist on the actual object, the interpreter will
// look at its prototype.

// Some JS implementations let you access an object's prototype on the magic
// property `__proto__`. While this is useful for explaining prototypes it's not
// part of the standard; we'll get to standard ways of using prototypes later.
var myObj = {
    myString: "Hello world!"
};
var myPrototype = {
    meaningOfLife: 42,
    myFunc: function(){
        return this.myString.toLowerCase();
    }
};

myObj.__proto__ = myPrototype;
myObj.meaningOfLife; // = 42

// This works for functions, too.
myObj.myFunc(); // = "hello world!"

// Of course, if your property isn't on your prototype, the prototype's prototype is searched, and so on.
myPrototype.__proto__ = {
    myBoolean: true
};
myObj.myBoolean; // = true

// There's no copying involved here; each object stores a reference to its
// prototype. This means we can alter the prototype and our changes will be
// reflected everywhere.
myPrototype.meaningOfLife = 43;
myObj.meaningOfLife; // = 43

// The for/in statement allows iteration over properties of an object,
// walking up the prototype chain until it sees a null prototype.
for (var x in myObj){
    console.log(myObj[x]);
}
///prints:
// Hello world!
// 43
// [Function: myFunc]
// true

// To only consider properties attached to the object itself
// and not its prototypes, use the `hasOwnProperty()` check.
for (var x in myObj){
    if (myObj.hasOwnProperty(x)){
        console.log(myObj[x]);
    }
}
///prints:
// Hello world!

// Note: A value is justified by the first prototype up the chain of inheritence. // meaning if a prototype's prototype has a same property as the prototype, then when calling the attribute the first prototype up the inheritence chain will be referenced. 
myPrototype.__proto__ = {
    meaningOfLife: 50
};
console.log(myObj.meaningOfLife); // = 43
delete myObj.__proto__.meaningOfLife;
console.log("after delete")
console.log(myObj.__proto__) // = { myFunc: [Function: myFunc] }
console.log(myObj.__proto__.__proto__) // = { meaningOfLife: 50 }
console.log(myObj.meaningOfLife); // = 50

// We mentioned that `__proto__` was non-standard, and there's no standard way to
// change the prototype of an existing object. However, there are two ways to
// create a new object with a given prototype.

// The first is Object.create, which is a recent addition to JS, and therefore
// not available in all implementations yet.
var myObj = {
    myString: "Hello world!"
};
var myPrototype = {
    meaningOfLife: 42,
    myFunc: function(){
        return this.myString.toLowerCase();
    }
};

var myObj = Object.create(myPrototype); // Note: myObj = {} and myObj.__proto__ = {meaningOfLife:42, myFunc:[function: myFunc]}
myObj.meaningOfLife; // = 42

// The second way, which works anywhere, has to do with constructors.
// Constructors have a property called prototype. This is *not* the prototype of
// the constructor function itself; instead, it's the prototype that new objects
// are given when they're created with that constructor and the new keyword.
var MyConstructor = function(){
    this.myNumber = 21;
};

MyConstructor.prototype = {
    myNumber: 5,
    getMyNumber: function(){
        return this.myNumber;
    }
};

var myNewObj2 = new MyConstructor();
for( var x in myNewObj2){
    console.log(x)

}
console.log(myNewObj2.getMyNumber()); // = 21
delete myNewObj2.myNumber
console.log(myNewObj2.getMyNumber()); // = 5
myNewObj2.myNumber = 6; // refering to protype property because the actual object doesn't have that property anymore but the chain of inheritence still does.
console.log(myNewObj2.getMyNumber()); // = 6 

// Built-in types like strings and numbers also have constructors that create
// equivalent wrapper objects.
var myNumber = 12;
var myNumberObj = new Number(12);
myNumber == myNumberObj; // = true

// Except, they aren't exactly equivalent.
typeof myNumber; // = 'number'
typeof myNumberObj; // = 'object'
myNumber === myNumberObj; // = false
if (0){
    // This code won't execute, because 0 is falsy.
}
if (new Number(0)){
   // This code will execute, because wrapped numbers are objects, and objects
   // are always truthy.
}
console.log((0).toString());
// However, the wrapper objects and the regular builtins share a prototype, so
// you can actually add functionality to a string, for instance.
String.prototype.firstCharacter = function(){
    return this.charAt(0);
};
"abc".firstCharacter(); // = "a"

// This fact is often used in "polyfilling", which is implementing newer
// features of JavaScript in an older subset of JavaScript, so that they can be
// used in older environments such as outdated browsers.

// For instance, we mentioned that Object.create isn't yet available in all
// implementations, but we can still use it with this polyfill:
if (Object.create === undefined){ // don't overwrite it if it exists
    Object.create = function(proto){
        // make a temporary constructor with the right prototype
        var Constructor = function(){};
        Constructor.prototype = proto;
        // then use it to create a new, appropriately-prototyped object
        return new Constructor();
    };
}

// isPrototypeOf() 
// this method checks if an object exists in another object's prototype chain.
function object1() {}
function object2() {}

object1.prototype = Object.create(object2.prototype);

const object3 = new object1();

console.log(object1.prototype.isPrototypeOf(object3)); // = true

console.log(object2.prototype.isPrototypeOf(object3)); // = true


// isPrototypeOf() differs from the instanceof operator. 
// In the expression "object instanceof AFunction", the object prototype chain is checked against 
// AFunction.prototype, not against AFunction (the instance) itself.

// The instanceof operator tests whether the prototype property of a constructor (not the Constructor Function itsef) appears 
// anywhere in the prototype chain of an object.
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  var auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car); // true
  
  console.log(auto instanceof Object); // = true
  
///////////////////////////////////////
// Different types of 'this' contexts:
// 'this.' will mean reference different things based on how the function wrapping the 'this.' reference is called 
// The value of this is determined by how a function is called (runtime binding). 
function foo(){
    console.log("Hello World!");
    console.log(this);
}

foo(); // Method #1, refers to window / global object 

var obj = {
    name:"Matt"
}

obj.method = function(){
    console.log(this.name);
}

obj.method(); // Method #2, refers to the object you are calling the method on, calling in context of the object 

new foo(); // Method #3, refers to the newly created object; creates a new object on the fly and assigns it to the this reference, points to newly created object

// Method #4:
// We can also specify a context for a function to execute in when we invoke it using `call` or `apply`. 
// Specifying context means to essentially force the value of 'this' to refer to the object being passed in to the call(), apply(), or bind() function method
// Note: .call() is a function method, so you invoke it on a function reference
var someFunction = function(s1){
    return this.name + s1;
};

someFunction.call(obj, " really enjoys programming!"); // = "Matt really enjoys programming!"
someFunction(" really enjoys programming!"); // = "undefined really enjoys programming!" ; undefined is printed because the context of 'this' refers to the window(browser)/global(nodejs) object, and that object doesn't hve the property '.name'

// The `apply` function is nearly identical, but takes an array for an argument list.
anotherFunc.apply(obj, [" really enjoys programming!"]); // = "Matt really enjoys programming!"

var obj2 = {name:"Peter"}
var boundedFunction = someFunction.bind(obj2);
boundedFunction(" also really enjoys programming!") // = "Peter also really enjoys programming!"

// Method #5: 
// In arrow functions, this retains the value of the enclosing lexical context's this. 
// In global code, it will be set to the global object:
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true

// if this arg is passed to call, bind, or apply on invocation of an arrow function it will be ignored. You can still prepend arguments to the call, but the first argument (thisArg) should be set to null.

// Call as a method of an object
var obj = {func: foo};
console.log(obj.func() === globalObject); // true

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true

// No matter what, foo's this is set to what it was when it was created (in the example above, the global object). 
// The same applies to arrow functions created inside other functions: their this remains that of the enclosing lexical context.

// Create obj with a method bar that returns a function that
// returns its this. The returned function is created as 
// an arrow function, so its this is permanently bound to the
// this of its enclosing function. The value of bar can be set
// in the call, which in turn sets the value of the 
// returned function.
var obj = {
    bar: function() {
      var x = (() => this); // or calls another function of a different class and ueses the arrow function as a callback to bind the instance of the object
      return x;
    },
    method: () =>{this}
  };
  
  // Call bar as a method of obj, setting its this to obj
  // Assign a reference to the returned function to fn
  var fn = obj.bar();
  
  // Call fn without setting this, would normally default
  // to the global object or undefined in strict mode
  console.log(fn() === obj); // true
  
  // Arrow functions as methods behave differently:
  console.log("MEHEHS", obj.method())
  // But caution if you reference the method of obj without calling it
  var fn2 = obj.bar;
  // Calling the arrow function's this from inside the bar method()
  // will now return window, because it follows the this from fn2.
  console.log(fn2()() == global); // true

  // In the above, the function (call it anonymous function A) assigned 
  // to obj.bar returns another function (call it anonymous function B) 
  // that is created as an arrow function. As a result, function B's `this` is permanently set to the this of obj.bar (function A) when called. When the returned function (function B) is called, its this will always be what it was set to initially. In the above code example, function B's this is set to function A's this which is obj, so it remains set to obj even when called in a manner that would normally set its this to undefined or the global object (or any other method as in the previous example in the global execution context).