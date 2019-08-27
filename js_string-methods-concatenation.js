// String Methods and Concatenation

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Jessica';
const tabs = 'Web Design, Web Development, Programming';
let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Appending
val = 'Jessica ';
val += 'Felts-Jensen'; // Appends 'Felts-Jensen' to 'Jessica'

val = 'Hello, my name is ' + firstName + ' and I am ' + age + '.';

// Escaping
val = "That's awesome, I can't wait"; // Use Double Quotes for strings that contain single quotes
val = 'That\'s awesome, I can\'t wait'; // Escape using a backslash

// Length
val = firstName.length; // Counts the Number of Characters in the String

// Concat
val = firstName.concat(' ', lastName);

// Changing Case
val = firstName.toUpperCase(); // Returns all Uppercase
val = firstName.toLowerCase(); // Returns all Lowercase

// Read Only Arrays
val = firstName[2]; // Returns the 2nd Character of the String, starting at 0

// indexOf()
val = firstName.indexOf('a'); // Returns the position of this character, starting from the beginning of the string
val = firstName.lastIndexOf('a'); // Returns the position of this character, starting from the end and going backwards

// charAt()
val = firstName.charAt('5'); // Returns the character at that position

// Get Last Character
val = firstName.charAt(firstName.length - 1); // Returns the last character of the string

// substring()
val = firstName.substring(0, 4); // Returns a string of the given character positions

// slice()
val = firstName.slice(0, 4); // Works the same as substring()
val = firstName.slice(-3); // Gives the last 3 characters of the string

// split()
val = str.split(' '); // Provides an Array based on what is passed - in this case, spaces
val = tabs.split(','); // Splits based on the comma

// replace()
val = str.replace('Jessica', 'David'); // Replacing something inside the string

// includes()
val = str.includes('Hello'); // Returns a true value, because it IS included in the string;
val = str.includes('Foo'); // Returns a false value, because it is NOT included in the string;

console.log(val);