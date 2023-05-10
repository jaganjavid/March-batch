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

    // EVENT WILL RUN WHEN PAGE RELOD
    document.addEventListener("DOMContentLoaded", getTasks);

}

// GET TASKS
function getTasks(){

  let tasks;
  
  if(localStorage.getItem("tasks") === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  if(tasks.length > 0){
        document.querySelector(".card-action").style.display = "block";
        document.querySelector("h4").style.display = "none";
        
        tasks.forEach(function(item){
            // CREATE A LI ELEMENT
        const li = document.createElement("li");
    
        // ADD CLASS
        li.className = "collection-item";
    
        // CREATE A TEXT NODE AND APPEND TO LI
        li.appendChild(document.createTextNode(item));
    
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
    });
  } else{
        document.querySelector(".card-action").style.display = "none";
  }

  
}

// ADD TO TASK

function addTask(e){
    e.preventDefault();
    
    if(taskInput.value === ""){
        alert("Add the task");
        return;
    }

    document.querySelector(".card-action").style.display = "block";
    document.querySelector("h4").style.display = "none";

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

    // STORE IN LS
    storeInLs(taskInput.value);

    // CLEAR THE INPUT VALUE
    taskInput.value = "";
}


// storeInLs
function storeInLs(task){ 
  let tasks;
  
  if(localStorage.getItem("tasks") === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

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
            removeFromLs(e.target.parentElement.parentElement);
        }
    }

}

function removeFromLs(taskElement){

    
    let tasks;
  
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

   
    tasks.forEach(function(task, index){
        if(taskElement.textContent === task){
            tasks.splice(index, 1);
        } 
    })
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
}


// CLEAR TASK
function clearTask(){
    taskList.innerHTML = "";
    // Clear from LS
    clearTaskFromLS()
    
}


function clearTaskFromLS(){
    localStorage.clear();
}

// document.querySelector(".card").style.display = "none";



// const arr = [1,"Hello", true];

// console.log(arr);

// const convertToString = JSON.stringify(arr);

// console.log(convertToString);

// const convertToarr = JSON.parse(convertToString);

// console.log(convertToarr);