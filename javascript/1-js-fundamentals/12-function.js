
// Function Decalaration 0r (Function Statement)
// Define a function with the specified parameters 

// Two Phases

// 1 - Creatation
// 2 - Excutation

// function greet(firstName = "John", lastName = "Doe"){
    // if(typeof firstName === "undefined"){ firstName = "John" }
    // if(typeof lastName === "undefined"){lastName = "Doe"}

//     console.log(firstName, lastName);
// };


// Call function
// greet("Jagan", "Javid");

// Function expression

// const add = function(x = 10, y = 15){
//     console.log(x + y);
// }

// add(5, 10);

// An IIFE (Imediately Invoked Function Expression) is a Javascript

// (function(){
//     console.log("Hello")
// })();

// (function(name){
//     console.log("Hello " + name)
// })("Javid")


const person = {
    firstName: "Jagan", // property
    lastName: "Javid", // property
    getFullName: function(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

// BY Value and BY Reference // ***


person.age = 25;
person.alive = function(){
    return true;
}

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.getFullName());

console.log(person.alive())