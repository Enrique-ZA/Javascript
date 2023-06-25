# ES6+ (ECMAScript 2015+) Cheat Sheet
## 1. Variables and Scoping
```javascript
let: block-scoped variable declaration
const: block-scoped constant declaration
```
## 2. Arrow Functions
```javascript
const myFunc = (arg1, arg2) => arg1 + arg2;
```
## 3. Template Literals
```javascript
let name = "John";
console.log(`Hello, ${name}!`);
```
## 4. Default Parameters
```javascript
function greet(name = "User") {
  return `Hello, ${name}!`;
}
```
## 5. Destructuring Assignment
```javascript
let [a, b] = [1, 2]; // array destructuring
let {name, age} = {name: "John", age: 22}; // object destructuring
```
## 6. Enhanced Object Literals
```javascript
let name = "John";
let myObj = {
  name, // equivalent to name: name
  greet() { // equivalent to greet: function() {...}
    console.log(`Hello, ${this.name}`);
  }
};
```
## 7. Spread Operator (`...`)
```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
```
## 8. Rest Parameters (`...`)
```javascript
function myFunc(...args) {
  return args.reduce((a, b) => a + b);
}
```
## 9. Classes
```javascript
class MyClass {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
```
## 10. Promises
```javascript
let myPromise = new Promise((resolve, reject) => {
  // asynchronous operation
});
myPromise.then(value => {
  // handle resolved value
}).catch(reason => {
  // handle error
});
```
## 11. Async/Await
```javascript
async function myAsyncFunc() {
  try {
    let value = await myPromise;
    // handle resolved value
  } catch (reason) {
    // handle error
  }
}
```
## 12. Modules (import/export)
```javascript
// myModule.js
export const myVar = 1;
export function myFunc() { return 2; }

// main.js
import { myVar, myFunc } from './myModule.js';
```
> This cheat sheet is quite compact and does not include all ES6+ features or 
> details. For a comprehensive understanding, check out resources like the 
> [MDN Web Docs](https://developer.mozilla.org/) or 
> [ECMAScript specifications](https://www.ecma-international.org/publications/standards/Ecma-262.htm).
