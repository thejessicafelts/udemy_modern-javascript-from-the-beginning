// Function Declarations and Expressions

// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('Steve', 'Smith'));

console.clear();

// FUNCTION EXPRESSIONS

const square = function(x){
    return x*x;
};

console.log(square(8));

console.clear();

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
    console.log('IIFE Ran...');
})();

(function(name){
    console.log('Hello ' + name);
})('Brad');

console.clear();

// PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}...`);
    }
}

todo.add();
todo.edit(22);

todo.delete = function(){
    console.log('Delete todo...');
}

todo.delete();