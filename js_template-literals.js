// Template Literals

const name = 'Jessica';
const age = 26;
const job = 'Salesforce UI Developer';
const city = 'Pontiac';

// Without Template Strings (ES5), on one line
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// Without Template Strings (ES5), on multiple lines
html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: '  + age  + '</li>' +
       '<li>Job: '  + job  + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';

// With Template Strings (ES6+)

function hello(){
    return 'Hello!';
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Math: ${2+2}</li>
        <li>Functions: ${hello()}</li>
        <li>Age Category: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`; // Backticks ` denote a template string

document.body.innerHTML = html;