// Variables: var, let, and const

// Var

var varName = 'John Doe';
console.log(varName);
// Reassigning a Variable that is var or let
varName = 'Jane Smith';
console.log(varName);

// Initilizing a Variable
var varGreeting; // Setting to Undefined
console.log(varGreeting); // will return undefined
varGreeting = 'Hello';
console.log(varGreeting); // will return Hello

// Letters, Numbers, _, or $
// Variables cannot start with Numbers

// Multi-Word Variables
var firstName = 'John'; // Camel Case -- Standard
var first_name = 'Jane'; // Underscore -- More common in languages like PHP
var FirstName = 'Sarah'; // Pascal Case -- Not Common
var firstname = 'David'; // Lowercase -- Not recommended

// Let

let letName;
letName = 'John Doe';
console.log(letName);
// Reassigning a Variable that is var or let
letName = 'Jane Smith';
console.log(letName);

// Const

const constName = 'John Doe';
console.log(constName);
// Cannot Reassign a Variable that is const

// Cannot initialize a variable without a value
// const constGreeting;

const constPerson = {
    name: 'Jessica',
    age: 26
}

// Can Update Arrays with new Information
constPerson.name = 'Jennifer';
constPerson.age = 32;
console.log(constPerson);

// Can push new values to an array
const constNumbers = [1,2,3,4,5];
constNumbers.push(6);
console.log(constNumbers);