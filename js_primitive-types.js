// Primitive Data Types

// String
const name = 'John Doe';
console.log(typeof name);

// Number
const age = 45; // Numbers do not get quotes
console.log(typeof age);

// Boolean
const hasKids = true; // Booleans do not get quotes
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car); // Will Return as Object, Search: 'typeof null is object'

// Undefined
let test; // Using let because const will throw an error for not being defined
console.log(typeof test);

// Symbols (ES6)
const sym = Symbol(); // new in ES6
console.log(typeof sym);