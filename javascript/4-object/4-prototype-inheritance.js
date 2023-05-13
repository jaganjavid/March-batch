// an object can inherit properties of another object

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName; // props
}

// GREETING 
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const javid = new Person("Jagan", "javid");


// CUSTOMER OBJECT

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// INHERIT THE PERSON PROTOTYPE METHODS
Customer.prototype = Object.create(Person.prototype);


// CUSTOMER GREETING
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

const javidCustomer = new Customer("jagan", "javid", "000-000-0000", 'pro');


console.log(javidCustomer.greeting());
console.log(javidCustomer);