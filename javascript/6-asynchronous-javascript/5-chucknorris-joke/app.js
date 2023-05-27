
document.querySelector("#get-joke")
.addEventListener("click", function(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.chucknorris.io/jokes/random");
    
    xhr.onreadystatechange = function(){
       if(this.readyState === 4 && this.status === 200){
          const data = JSON.parse(this.response);
        //   console.log(data)
        document.querySelector(".card-body").textContent = data.value;
        //   console.log(data.value);
       }
    }
    
    xhr.send();
})


