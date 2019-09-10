// Loops and Iterations

// FOR LOOP

for(let i = 0; i < 10; i++){
    //console.log('Number ' + i);
    if(i === 2){
        console.log('2 is my favorite number!');
        continue;
    }
    if(i === 5){
        console.log('Stop the Loop!');
        break;
    }
    console.log('Number ' + i);
}

console.clear();

// WHILE LOOP

let j = 0;

while(j<10){
    console.log('Number ' + j);
    j++;
}

console.clear();

// DO WHILE LOOP

let k = 100;

// Will always run once, no matter what
do{
    console.log('Number ' + k);
    k++;
}

while(k < 10);

console.clear();

// LOOP THROUGH ARRAYS

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
    console.log('Make: ' + cars[i]);
}

console.clear();

// FOR EACH ARRAY LOOP 

cars.forEach(function(car, index){
    console.log(`${index} : ${car}`);
});

console.clear();

// MAP

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sarah'},
    {id: 3, name: 'Karen'},
    {id: 4, name: 'Steve'}
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);

console.clear();

// FOR IN LOOP

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x}: ${user[x]}`);
}