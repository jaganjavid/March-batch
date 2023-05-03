// document.querySelector("#btn-clear")
// .addEventListener("click", function(){
//     console.log(123);
// })

document.querySelector("#btn-clear")
.addEventListener("click", onClick);

function onClick(event){
    let val;
    
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList; // DOMTOKENLIST


    console.log(val);
}