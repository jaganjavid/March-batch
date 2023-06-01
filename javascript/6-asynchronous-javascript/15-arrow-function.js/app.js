// const sayHello = function(){
//     console.log("Hello");
// }

// sayHello();


// const sayHello = () => {
//     console.log("Hello");
// }

// One line function does not need braces
// const sayHello = () => console.log("Hello");

// One Line return
// const sayHello = () => "Hello";

// const sayHello = function(){
//     return "Hello";
// }

// Return Object
// const sayHello = () => ({msg: "Hello"});

// Multiple Params
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`)

// Sigle params does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// sayHello("Jagan");

const users = ["Javid", "Guru", "Akash"];

// users.forEach((user) => {
//   console.log(user);
// })

// users.forEach(function(user){
//     console.log(user);
// })

// const nameLength = users.map((name) => {
//     return name.length;
// })

const nameLength = users.map(name => name.length);

console.log(nameLength);


