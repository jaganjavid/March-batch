let val;

// Number to String
val = String(555);
val = String(5 + 5);
val = (5).toString();

// Bool to String
val = String(true);
val = (true).toString();

// Arr to String
val = String([1,2,3,"Hello"]);

// Srting to Number
val = Number("5");
val = Number("5 + 5"); // NaN = Not a Number

// Boolean to Number
val = Number(true);
val = Number(false);

val = Number(null);

val = Number("Hello"); // NaN
val = Number([1,2,3]); // NaN

val = parseInt("100.30");
val = parseFloat("100.35");



console.log(val);
console.log(typeof val);