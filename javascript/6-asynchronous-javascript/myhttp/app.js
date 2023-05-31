const http = new myHTTP();


http.get("https://jsonplaceholder.typicode.com/users")
.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})


// USER DATA

const data = {
    name:"Jagan Javid",
    userName: "jj123",
    email: "jaganjavid@gmail.com"
}

// Create a post 
http.post("https://jsonplaceholder.typicode.com/users", data)
.then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err);
})

// Update user
http.put("https://jsonplaceholder.typicode.com/users/5", data)
.then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err);
})

// Delete User
http.delete("https://jsonplaceholder.typicode.com/users/3")
.then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err);
})