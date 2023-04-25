const num1 = 100;
const num2 = 50;

let val;

// Simple Math with numbers

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// MATH OBJECT

val = Math.PI;
val = Math.round(2.4);
val = Math.ceil(2.1); // Upper Number
val = Math.floor(2.9); // Lower Number
val = Math.sqrt(64); 
val = Math.abs(-5); // always return the positive value
val = Math.min(-5, 0, 1, 2, 3, 4, 6, 8); 
val = Math.max(-5, 0, 1, 2, 3, 4, 6, 8); 
val = Math.random();

val = Math.floor(Math.random() * 20);


console.log(val);