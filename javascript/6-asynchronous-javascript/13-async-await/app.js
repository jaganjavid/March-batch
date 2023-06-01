// async function myFunc(){
//     const promise = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("Hello")
//         }, 3000)
//     })

//     const error = true;

//     if(!error){
//         const res = await promise;
//         console.log(res);
//     } else {
//         await Promise.reject(new Error("Something went worng"));
//     }
// }

// myFunc();

async function getUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Only procedd once its resolved
    const data = await response.json();

    return data;
}

getUsers().then(function(users){
    console.log(users);
}).catch(function(error){
 console.log(error);
})