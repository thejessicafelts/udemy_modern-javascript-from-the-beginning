// Object Literals

const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    birthYear: 1993,
    email: 'steve@aol.com',
    hobbies: ['music','sports'],
    address: {
        street: '123 Main Street',
        city: 'Miami',
        state: 'FL'
    },
    getAge: function(){
        return new Date().getFullYear() - this.birthYear;
    }
}

let val;
val = person;

// Get a Specific Value
val = person.firstName;
val = person['firstName'];

val = person.age;
val = person.hobbies;
val = person.hobbies[0];
val = person.address
val = person.address.state;
val = person.getAge();

// console.log(val);

const people = [
    {name: 'David', age: 30},
    {name: 'Jessica', age: 26},
    {name: 'Mary', age: 27}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}