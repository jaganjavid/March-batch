const taskInput = document.getElementById("task");


// KEYBOARD
// taskInput.addEventListener("keydown", runEvent);

// taskInput.addEventListener("keyup", runEvent); //***

// taskInput.addEventListener("keypress", runEvent);

// taskInput.addEventListener("focus", runEvent);

// taskInput.addEventListener("blur", runEvent);

// taskInput.addEventListener("cut", runEvent);

// taskInput.addEventListener("copy", runEvent);

// taskInput.addEventListener("paste", runEvent);



function runEvent(event){
    // console.log(event);
  console.log(`Event Type ${event.type}`); 
  console.log(event.target.value)
}