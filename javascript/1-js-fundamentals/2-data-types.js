// Primitive Values

// Hold only a single value

//  7 Types => main 5 Types

// String
const name = "Jagan";
console.log(name);

// Number
const age = 25;
console.log(age);

// Boolean
const hasKids = false;
console.log(hasKids);

// Null
const gun = null;
console.log(gun);

// Undefined
let undef;
console.log(undef);


// console.log(typeof undef);

// Symbol , // BigInt
// const sym = Symbol();
// console.log(sym);



// Reference Types - objects

// Array

const myArr = ["jagan","javid", 25, true, null, undefined];
console.log(myArr);

// Object

// Key:Value or Name:Value pair

const car = {
    name: "BMW",
    color: "Black",
    model : "X5",
    year: 2022,
    start: function(){
        console.log("Yeah im started");
    },
    stop: function(){
        console.log("Yeah put Break")
    }
}

console.log(car);



console.log(typeof myArr);


