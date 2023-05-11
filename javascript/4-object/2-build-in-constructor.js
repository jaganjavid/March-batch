// STRING

const name1 = "Jagan"; // 100%
const name2 = new String("Jagan");

// console.log(name1);
// console.log(name2);

// if(name1 === name2){
//     console.log("Yes im correct");
// } else{
//     console.log("im not correct");
// }


const num1 = 5;
const num2 = new Number(5);

// console.log(num1);
// console.log(num2);

const bool1 = true;
const bool2 = new Boolean(false);

// console.log(bool1)
// console.log(bool2)

// Function
const getSum = function(x, y){
    return x + y;
}

const getSum2 = new Function("x", "y", "return x + y");

// console.log(getSum(5,5));
// console.log(getSum2(15,5));

// Array
const arr1 = [1,2,3]; //***
const arr2 = new Array(1,2,3);

// console.log(arr1);
// console.log(arr2);

// Object
const jagan = {name:"jagan"};
const javid = new Object({name:"jagan"});


// console.log(jagan);
// console.log(javid);


