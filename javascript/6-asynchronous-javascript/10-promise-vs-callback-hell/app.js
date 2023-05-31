function getData(endpoint){
    return new Promise(function(resolve, reject){

        
        const xhr = new XMLHttpRequest;

        xhr.open("GET", endpoint, true);
    
        xhr.onload = function(){
            if(this.status === 200){
                const result = JSON.parse(this.responseText);
                // console.log(result);
                resolve(result);
            } else {
                reject("Something went worng")
            }
        }
    
        setTimeout(() => {
            xhr.send()
        }, Math.floor(Math.random() * 3000) + 1000);
    })
}

getData("./alluser.json")
.then(function(alluser){
    console.log(alluser);
    return getData("./men.json");
}).then(function(men){
    console.log(men);
    return getData("./women.json");
}).then(function(women){
    console.log(women);
}).catch(function(error){
    console.log(error);
})