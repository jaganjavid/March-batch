// DEFINE UI VARS

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector("#btn-clear");

// LOAD ALL EVENT LISTENERS

loadEventListerners();

function loadEventListerners(){
    
    // ADD TASK
    form.addEventListener("submit", addTask);

    // REMOVE TASK
    taskList.addEventListener("click", removeTask);

    // CLEAR TASK
    clearBtn.addEventListener("click", clearTask);

}

// ADD TO TASK

function addTask(e){
    e.preventDefault();
    
    if(taskInput.value === ""){
        alert("Add the task");
        return;
    }

    // CREATE A LI ELEMENT
    const li = document.createElement("li");

    // ADD CLASS
    li.className = "collection-item";

    // CREATE A TEXT NODE AND APPEND TO LI
    li.appendChild(document.createTextNode(taskInput.value));

    // CREATE A NEW LINK ELEMENT
    const link = document.createElement('a');

    // ADD CLASS TO LINK
    link.className = "delete-item secondary-content";

    // ADD ICON TO LINK
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    // APPEND THE LINK TO LI
    li.appendChild(link);

    // APPEND THE LI TO UL
    taskList.appendChild(li);

    // CLEAR THE INPUT VALUE
    taskInput.value = "";
}

// REMOVE TASK
function removeTask(e){

    // if(e.target.parentElement.className === "delete-item secondary-content"){
    //     if(confirm("Are you sure")){
    //         e.target.parentElement.parentElement.remove();
    //     }
    // }

    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure")){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// CLEAR TASK
function clearTask(){
    // console.log(taskList.innerHTML);
    taskList.innerHTML = "";
}

// document.querySelector(".card").style.display = "none";