const xhr = new XMLHttpRequest();

xhr.open("GET", "./users.json");

xhr.onreadystatechange = function(){
   if(this.readyState === 4 && this.status === 200){
      const data = JSON.parse(this.response);
      
      data.forEach(function(user) {
        const li = document.createElement("li");

        li.innerHTML = `<strong>${user.name}</strong>
        : <em>${user.role}</em>`

        document.querySelector(".json-output").appendChild(li);
      });
   }
}

xhr.send();