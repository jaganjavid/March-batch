const person = {
    // Properties
    firstName: "Jagan", // name and value pairs or key and value pairs
    lastName: "Javid",
    age: 25,
    email:"jaganjavid@gmail.com",
    hasAlive: true,
    hobbies: ["music", "sports"],
    address: {
      city: "Chennai",
      state: "TN"
    },
    getFullName: function(){ // Methods
        console.log(this.firstName + " " + this.lastName);
    }
};


let val;

val = person;
val = person.firstName; //***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hasAlive;
val = person.hobbies[1];
val = person.address.city;
val = person.getFullName();


// console.log(val);