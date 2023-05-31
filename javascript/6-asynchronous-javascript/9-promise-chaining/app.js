const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;

        if(!error){
            resolve({name:"Javid", age:26})
        } else {
            reject("Error: Something went worng")
        }
    }, 1000)
})

promise.then(function(user){
    console.log(user)
    return user.name;
}).then(function(name){
   console.log(name)
   return name.length;
}).then(function(nameLength){
    console.log(nameLength)
}).catch(function(error){
    console.log(error);
})