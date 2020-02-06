var name = 'Batman';
var type = 'Superhero';

name = name + ' The '+type ;

console.log(name);
console.log(name.charAt('2'));                  // Character At A Specific Position in the String
console.log(name.length);                       // String Length

console.log(name.toUpperCase());                // Uppercase Conversion


// Split, Slice and Substring

var intro = 'JavaScript is a dynamically typed programming language';
console.log(intro.substring(0,10));             // Substring
console.log(intro.slice(0,10));                 // Slice works same as Substring , plus can work on negative values as well
console.log(intro.slice(-8));

console.log(intro.split(' '));                 // Spliting the String in Arrays at Space

// Replace
console.log(intro.replace('dynamically','Dynamically'));    

// Includes
console.log(intro.includes('JavaScript'));



