const firstName = "Jagan";
const lastName = "Javid";
const age = 25;
const str = "Hello there my name is Jagan";
const tags = "Web Dev,Web Design,Coding,Programming";


let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";
// val = val + "Doe" 
val += "Doe";

val = "Hello, My name is " + firstName + " and I am " + age;

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Get the index of String
val = firstName[0]; // index is start from 0
val = firstName[1];
val = firstName[5];

val = firstName.charAt("2");
// Get the last INDEX
val = firstName.charAt(firstName.length - 1);

// Slice

const furit = "Apple";

val = furit.slice(0,3);
// val = furit.slice(-2);

// Split
val = str.split(" ");
val = tags.split(",");

// Replace
// val = str.replace("Jagan", "Javid")

// Includes
val = str.includes("there")



console.log(val);