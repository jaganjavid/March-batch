const xhr = new XMLHttpRequest();

console.log(xhr);

xhr.open("GET", "./mytext.txt");

// 0 - request not initialized
// 1 - server connection established	
// 2 - request received	
// 3 - processing request	
// 4 - request finished and response is ready

xhr.onreadystatechange = function(){
   if(this.readyState === 4 && this.status === 200){
      const data = this.response;
      document.querySelector(".text-output").textContent = data;
   }
}

xhr.send();