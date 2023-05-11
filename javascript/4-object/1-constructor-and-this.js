function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName; // props
    this.getFullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

const javid = new Person("Jagan", "Javid");
const arun = new Person("arun", "kumar");

console.log(javid);
console.log(arun);
console.log(javid.getFullName());
console.log(arun.getFullName());


// function Test(){};

// const test = new Test();

// test.msg = "Hello";

// console.log(test);




































// console.log(this); //window


// function test(){
//     console.log(this); //window
// }

// test();

// var obj = {
//     name:"Jagan",
//     run: function(){
//         console.log(this);
//     }
// }

// obj.run();