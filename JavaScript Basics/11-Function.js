// Simple Functions

function greet(name, city){
    return `Hello ${name} of ${city}`;
}

console.log(greet('Batman','Gotham City'));


// IIFE - Immediately Invokable Function Expressions

(function(){
    console.log('Immediately Invokable Function');
})();


(function(name, age){
    console.log(`${name} of Age ${age}`);
})('Batman',30);
