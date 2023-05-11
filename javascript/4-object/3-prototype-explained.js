function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName; // props
}


const javid = new Person("Jagan", "Javid");
const josh = new Person("josh", "yyy");


Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
}

// DONT USE THIS
// Person.prototype.__proto__.getFullName = function(){
//     return this.firstName + " " + this.lastName;
// }


console.log(javid.getFullName());
console.log(josh)
