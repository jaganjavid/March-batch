const ul = document.querySelector(".collection");


ul.addEventListener("click", deleteItem);

// function deleteItem(e){
//     if(e.target.parentElement.className === "delete-item secondary-content"){
//         e.target.parentElement.parentElement.remove();
//     }
// }

function deleteItem(e){
    if(e.target.parentElement.classList.contains("delete-item")){
        e.target.parentElement.parentElement.remove();
    }

    console.log(e.target.parentElement.classList);

}
