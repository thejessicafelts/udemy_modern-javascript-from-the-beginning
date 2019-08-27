// Arrays and Array Methods

// Creating some Arrays
const numbers = [43,56,33,23,44,36,5]; // An Array of Numbers
const numbers2 = new Array(22,45,33,76,54) // An Array of Numbers
const fruit = ['apple', 'banana', 'orange', 'pear']; // An Array of Fruit
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()]; // An Array of Different Data Types

let val;

// Get Array Length (How Many Values are in the Array)
val = numbers.length;

// Check if Something is an Array
val = Array.isArray(numbers);

// Get a Single Value from an Array
val = numbers[3]; // Arrays Start at 0, so this is the 4th position
val = numbers[0];

// Modifying an Array
numbers[2] = 100; // Updates this place in the array

// Find the Index of a Value
val = numbers.indexOf(36);

// Mutating Arrays

// Mutating - Add on to the End of an Array
numbers.push(250);

// Mutating - Add on to the Front of an Array
numbers.unshift(120);

// Mutating - Take away from the end of the Array
numbers.pop();

// Mutating - Take away from the end of the Array
numbers.shift();

// Mutating - Splicing Values out of an Array
numbers.splice(1,3); // Where we want to start, Where we want to end

// Mutating - Reversing an Array
numbers.reverse();

// Concatenate an Array
val = numbers.concat(numbers2);

// Sorting an Array
val = fruit.sort(); // Sorts to Alphabetical Order
val = numbers.sort(); // Sorts by First Number of Each Number
val = numbers.sort(function(x,y){
    return x - y;
}); // Sorts by Entire Number, Smallest to Largest
val = numbers.sort(function(x,y){
    return y - x;
}); // Sorts by Entire Number, Largest to Smallest

// Finding within an Array
function under50(num){
    return num < 50;
}
val = numbers.find(under50); // Finds the First Number that meets the conditions
function over50(num){
    return num > 50;
}
val = numbers.find(over50); // Finds the First Number that meets the conditions

console.log(numbers);
console.log(val);