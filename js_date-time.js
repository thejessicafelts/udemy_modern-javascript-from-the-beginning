// Dates and Times

let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');

birthday = new Date('September 10, 1981');
birthday = new Date('9/10/1981');

val = birthday;

// Get the Month of the Year
val = today.getMonth(); // This is a 0-Based Array

// Get the Date of the Month
val = today.getDate();

// Get the Day of the Week
val = today.getDay(); // This is a 0-Based Array

// Get the Year 
val = today.getFullYear(); // Give the full 4-digit year

// Get the Hours of the Time
val = today.getHours();

// Get the Minutes of the Time
val = today.getMinutes();

// Get the Seconds of the Time
val = today.getSeconds();

// Get the Milliseconds of the Time
val = today.getMilliseconds();

// Get the current Timestamp
val = today.getTime();

console.log(val);
//console.log('Type: ' + typeof val);

// Setting a Value
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
//console.log('Type: ' + typeof birthday);