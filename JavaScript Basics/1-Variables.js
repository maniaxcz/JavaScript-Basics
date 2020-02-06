/*
Types :

1. var
2. let - same as var, more useful when in block level scoping
3. const - any variable declared cannot be reassigned

*/

var name = 'Manan Sharma';          // var type declaration
var age = 26;
console.log(name,age);


let name2 = 'Batman';               // let type declaration
let age2 = 45;
console.log(name2,age2);


const name3 = 'Superman';           // const declaration should always be initialised as well
// name3 = 'Antman'                 // this will throw an error

const person={
    name:'Manan Sharma',
    age :26
}

console.table(person);

