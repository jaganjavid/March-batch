const personPrototype = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}


const mary = Object.create(personPrototype);

const jagan = Object.create(personPrototype, {
    firstName: {value:"Jagan"},
    lastName: {value:"Javid"},
})


mary.firstName = "Mary";
mary.lastName = "williams";

console.log(mary.greeting());

console.log(jagan.greeting());