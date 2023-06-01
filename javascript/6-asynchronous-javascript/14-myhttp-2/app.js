const http = new MyHTTP();

// Get User
http.get("https://jsonplaceholder.typicode.com/users")
.then(function(data){
 console.log(data)
}).catch(function(error){
    console.log(error);
})

const data = {
    name:"Jaganjavid",
    username:"jj123",
    email:"jaganjavid@gmail.com"
}

// Create a user
http.post("https://jsonplaceholder.typicode.com/users", data)
.then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error);
})


// Update a user
http.update("https://jsonplaceholder.typicode.com/users/2", data)
.then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error);
})

// Update a user
http.delete("https://jsonplaceholder.typicode.com/users/5")
.then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error);
})