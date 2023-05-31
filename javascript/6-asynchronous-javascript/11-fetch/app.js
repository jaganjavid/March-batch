document.getElementById("btn-1").addEventListener("click", getText);
document.getElementById("btn-2").addEventListener("click", getJson);
document.getElementById("btn-3").addEventListener("click", getExternal);


// Get a local text file

function getText(){
    const fetchFile = fetch("./text.txt");

    fetchFile.then(function(res){
        return res.text();
    }).then(function(data){
        document.getElementById("output").innerHTML = data;
    }).catch(function(err){
       if(err){
         document.getElementById("output").textContent = "Something went worng";
       }
    })

}


function getJson(){
    fetch("./posts.json")
    .then(function(res){
        return res.json()
    }).then(function(data){
        let output = "";
        data.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.getElementById("output").innerHTML = output;
    })
}


function getExternal(){
    fetch("https://api.github.com/users")
    .then(function(res){
        return res.json()
    }).then(function(data){
        let output = "";
        data.forEach(function(user){
            output += `<li>${user.login}</li>`
        });
        document.getElementById("output").innerHTML = output;
    })
}