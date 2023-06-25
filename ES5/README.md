# ES5 Cheat Sheet
## 1. Variables
-   `var`: Function-scoped variable declaration
## 2. Functions
```javascript
function myFunc(arg1, arg2) {
  return arg1 + arg2;
}
```
## 3. String Concatenation
```javascript
var name = "John";
console.log("Hello, " + name + "!");
```
## 4. Object Literal Syntax
```javascript
var myObj = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
```
## 5. Array Methods
-   `forEach`: Iterates over each element
-   `map`: Creates a new array with the results of a provided function
-   `filter`: Creates a new array with elements that pass the test implemented
    by a provided function
-   `reduce`: Applies a function against an accumulator and each element in the
    array to reduce it to a single output value
```javascript
var arr = [1, 2, 3, 4];
arr.forEach(function(value, index, array) {
  console.log(value);
});
```
## 6. Function Scope and Closures
```javascript
function outerFunc() {
  var outerVar = "I'm outside!";
  function innerFunc() {
    console.log(outerVar); // accesses outerVar
  }
  return innerFunc;
}
```
## 7. Prototype-based Inheritance
```javascript
function MyConstructor() {
  this.myProp = "property";
}
MyConstructor.prototype.myMethod = function() {
  console.log("method");
};
var myInstance = new MyConstructor(); 
```
## 8. Strict Mode
-   Enable strict mode by adding `"use strict";` at the beginning of a script
    or a function
## 9. JSON Parsing and Stringifying
```javascript
var jsonObj = JSON.parse('{"name":"John"}');
var jsonString = JSON.stringify({name: "John"});
```
> This cheat sheet is quite compact and does not include all ES5 features or
> details. For a comprehensive understanding, check out resources like the
> [MDN Web Docs](https://developer.mozilla.org/) or 
> [ECMAScript specifications](https://www.ecma-international.org/publications/standards/Ecma-262.htm).
