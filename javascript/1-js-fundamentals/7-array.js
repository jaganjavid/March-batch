// Create a array []

const number = [5,45,3,4,66,88,65,3,2,1]; // ***
// const number2 = new Array(88,65,3,2,1);

let val;

// Get the Array length
val = number.length;


// Check if is array
val = Array.isArray(number)

// Get a Single Value
val = number[0];
val = number[3];

// Change array index value
// val = number[1] = 100;

// Find the index of value
val = number.indexOf(666); 
// if array match is return the index number if not -1

// Mutating Array

// Add on the end
// number.push(500);

// Add on to front
// number.unshift(50);

// Take off from end
// number.pop()
// number.pop()

// Take off from front
// number.shift();
// number.shift();

const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);
// Splice

// TO Remove
// fruits.splice(1,1);

// To Add
fruits.splice(1,1,"Lemon");


console.log(fruits);