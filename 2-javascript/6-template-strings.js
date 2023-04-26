const name = "Javid";
const age = 25;
const job = "Web Developer";
const city = "Chennai";
let val;

// without template strings
// val = "My name is " + name + " " + "im" + " " + age + " " + "My job is" + " " + job + " " + city;

// With Template strings (es6)
val = `My name is ${name} im ${age} my job is ${job} and im from ${city}`;

console.log(val);