// document.getElementById()

// console.log(document.getElementById("task-title"));
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

const tastTitle = document.getElementById("task-title");

// Change Style

// console.log(tastTitle.style);
tastTitle.style.background = "blue";
tastTitle.style.color = "#ffffff";
tastTitle.style.padding = "15px"
// tastTitle.style.display = "none"

// Change Content

tastTitle.textContent = "Task List";
// tastTitle.innerText = "Task List";
// tastTitle.innerHTML = "<span>Task List Span</span>";

// document.querySelector();  

console.log(document.querySelector("#task-title")); // id
console.log(document.querySelector(".collection")); // class
console.log(document.querySelector("h5")); // tag

// document.querySelector("li").style.color = "red";
// document.querySelector("ul li").style.color = "blue";
// document.querySelector("li:nth-child(3)").style.color = "orange";
// document.querySelector("li:first-child").style.color = "green";
// document.querySelector("li:last-child").style.color = "green";
// document.querySelector("li:nth-child(odd)").style.color = "green";
// document.querySelector("li:nth-child(even)").style.color = "blue";
// document.querySelector("ul>li:first-child").style.color = "blue";
document.querySelector("ul>li:first-child").textContent = "Task List";


