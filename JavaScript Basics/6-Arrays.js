const arr = [1,2,3,4,5];                    // Array Declaration - Stored in Stack
const arr2 = new Array(6,7,8,9,10);         // Array Declaration - Stored in Heap

console.log(arr);
console.log(arr2);

console.log(arr.length);                    // Array Length
arr[1] = 22;                                // Changing An Element
console.log(arr);               
console.log(Array.isArray(arr));            // Check if it is Array
console.log(arr.indexOf(2));                // Find Element at a Position

/*                  Array Methods             */

arr.push(6);                                // Add an Element to the End Of An Array
console.log(arr);

arr2.unshift(5)                             // Add an Element at the Beginning
console.log(arr2);

arr.pop();                                  // Retrieve an Element from the Last
console.log(arr);

arr2.shift();                               // Retrieve an Element from the Beginning
console.log(arr2);

console.log(arr.splice(1,2));               // Slice an Array from a Position to Another Position
console.log(arr);

arr.concat(arr2);                           // Concatenate the Array
