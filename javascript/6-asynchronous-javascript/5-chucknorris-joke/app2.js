const buttonArr = [
    "animal","career","celebrity",
    "dev","explicit","fashion","food",
    "history","money","movie","music",
    "political","religion","science",
    "sport","travel"];

const ul = document.querySelector("ul");
const input = document.querySelector("#categories-input");


function xhrFunction(url){
    const xhr = new XMLHttpRequest;

    xhr.open("GET", url, true);

    xhr.onload = function(){
        if(this.status === 200){
            const result = JSON.parse(this.responseText);

            const joke = result.value;

            console.log(joke)

            const li = document.createElement("li");

            li.appendChild(document.createTextNode(joke));

            ul.appendChild(li);
            
        }
    }

    xhr.send()
}    




document.addEventListener("DOMContentLoaded", function(){
    
    const randomApi = "https://api.chucknorris.io/jokes/random";
    const btnWrapper = document.querySelector(".all-btn");
   
    buttonArr.forEach(function(item){
        const btn = document.createElement("button");
        btnWrapper.style.display = 'flex';
        btnWrapper.style.gap = "10px";
        btn.className = "btn btn-info categorie-btn";
        btn.innerText = item;

        btnWrapper.appendChild(btn);   
    })

    btnWrapper.addEventListener("click", function(e){
    //    console.log(e.target.classList);  
       if(e.target.classList.contains("categorie-btn")){
         input.value = e.target.innerText;
       }
    })
})   

document.getElementById("joke-form")
.addEventListener("submit", getJokes);

function getJokes(e){
    e.preventDefault();

    const getInput = input.value;

    if(getInput === ""){
        alert("Please select the button");
        return;
    }

    const getCategories = `https://api.chucknorris.io/jokes/random?category=${getInput}`;

    xhrFunction(getCategories);


}


