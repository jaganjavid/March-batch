const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users");

xhr.onreadystatechange = function(){
   if(this.readyState === 4 && this.status === 200){
      const data = JSON.parse(this.response);
      
      data.forEach(function(user) {
        const li = document.createElement("li");

        li.innerHTML = `<strong>${user.id}</strong>
        : <em>${user.login}</em>`

        document.querySelector(".json-output").appendChild(li);
      });
   }
}

xhr.send();