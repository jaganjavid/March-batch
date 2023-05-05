// if ... else

// The if statement executes a statement of a specified condition is truth.
// if the condition is falsy, another statement can be executed

// if(something){
//     do something
// } else {
//     do something else
// }


const id = 100; // number

// This == only check for the value

// EQUAL TO

if(id == "100"){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// NOT EQUAL TO
if(id != 101){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// This === only check both for the value and type

// EQUAL TO BOTH VALUE AND TYPE

if(id === 100){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// NOT EQUAL TO BOTH VALUE AND TYPE

if(id !== 100){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}


// TEST IF UNDEFINED

let greet = "HELLO";

if(typeof greet === "undefined"){
    console.log(`Yeah IM UNDEFINED COS IM NOT HAVING VALUE`)
}else {
    console.log(`Yeah IM DEFINED COS I HAVE A VALUE`)
}

// GREATER OR LESS THAN

if(id >= 99){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

if(id <= 101){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// IF ELSE

const color = "assaasda";

if("color" === "red"){
    console.log("Color is red")
} else if(color === "blue"){
    console.log("Color is blue")
} else if(color === "gray"){
    console.log("Color is gray")
} else {
    console.log("I dont Know the color");
}

// LOGICAL - && OPERATOR BOTH VALUE TRUE OR FALSE

const name = "Jagan";
const age = 70;

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if (age >= 13 && age <=19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is a adult`);
}

// OR - || CHECK ONLY ONE TRUE OR FALSE

if(age < 16 || age > 65){
    console.log(`${name} can not run the race`)
} else {
    console.log(`${name} can register for the race`)
}

// TERNARY OPERATOR
console.log(100 === 100 ? "Correct" : "INCORRECT")