class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `HEllo there my name is ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
       super(firstName, lastName);
       this.phone = phone;
       this.membership = membership;
    }

    getFullName() {
        return `HEllo there my name is ${this.firstName} ${this.lastName} welcome`;
    }
}

const javid = new Person("Jagan", "Javid");
const javidCustomer = new Customer("Jagan", "Javid", "000-000-0000", "standard");

console.log(javid);
console.log(javidCustomer);
console.log(javidCustomer.getFullName());
