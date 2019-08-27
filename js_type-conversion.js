// Type Conversion

let val;

// Number to String
val = 5;
val = String(555);
val = String(4+4);

// Boolean to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to Number
val = Number('5');
val = Number('hello'); // Outputs NaN, 'Not a Number'

// Boolean to Number
val = Number(true);
val = Number(false);

// Null to Number
val = Number(null);

// Array to Number
val = Number([1,2,3]); // Outputs NaN, 'Not a Number'

// Parse Integer
val = parseInt('100');
val = parseInt('100.30'); // Will returns 100, whole number

// Parse Float
val = parseFloat('100.30'); // Will return one decimal point by default

// Output
console.log('Value: ' + val);
console.log('Type: ' + typeof val);
// console.log('Length: ' + val.length); // Only works on Strings
console.log('Value: ' + val.toFixed()); // Only works on Numbers