// STORE > GET > DELETE > CLEAR

localStorage.setItem("task", "Learn");
localStorage.setItem("task2", "Learn Fast");

console.log(localStorage.getItem("task"));
console.log(localStorage.getItem("task2"));
// console.log(localStorage.getItem("task3")); // NULL

localStorage.removeItem("task");

localStorage.clear();