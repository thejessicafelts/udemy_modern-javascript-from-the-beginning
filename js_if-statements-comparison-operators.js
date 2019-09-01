// If Statements and Comparison Operators

/* Example -
 * if (something){
 *      do something
 * } else {
 *      do something else
 * }
*/

/* Equal Signs -
 * Single Equals '=' sets a value
 * Double Equals '==' compares value only
 * Triple Equals '===' compares value and type
*/

const id = 100;

// EQUAL TO
if(id == 101){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// NOT EQUAL TO
if(id != 101){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if(id === 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// NOT EQUAL TO VALUE & TYPE
if(id !== 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

console.clear();

let id2;

if(typeof id2 !== 'undefined'){
    console.log(`The ID is ${id}`);
} else {
    console.log('No ID');
}

console.clear();

// GREATER THAN OR LESS THAN

// Greater Than
if(id > 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// Greater Than or Equal To
if(id >= 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// Equal To
if(id == 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// Less Than or Equal To
if(id <= 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// Less Than
if(id < 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

console.clear();

// IF ELSE

const color = 'yellow';

if(color === 'red'){
    console.log('Color is Red');
} else if(color === 'blue'){
    console.log('Color is Blue');
} else {
    console.log('Color is not Red or Blue');
}

console.clear();

// LOGICAL OPERATORS

const name = 'Steve';
const age = 20;

// AND &&
if(age > 0 && age <= 12){
    console.log(`${name} is a child.`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager.`);
} else {
    console.log(`${name} is an adult.`)
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} cannot register for the race`);
} else {
    console.log(`${name} is registered for the race.`)
}

console.clear();

// TERNARY OPERATOR
const id3 = 101;
console.log(id3 === 100 ? 'CORRECT' : 'INCORRECT');

console.clear();

// WITHOUT BRACES (Possible, but not recommended)
const id4 = 100;
if(id4 === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');