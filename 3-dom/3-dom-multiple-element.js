// document.getElementsByClassName();

const items = document.getElementsByClassName("collection-item");


console.log(items);
console.log(items[0]);
items[0].style.background = "blue";
items[0].style.color = "#ffffff";
items[0].textContent = "Task 1";

// Convert HTMLCOLLECTION TO ARRAY'

// let list = Array.from(items)

// list.forEach(function(item){
// console.log(item);
//     item.style.background = "blue";
// })

// document.querySelectorAll();

const liItems = document.querySelectorAll("li"); // NODELIST

// Nodelist has inbuild foreach

liItems.forEach(function(li){
  li.textContent = "Hello guys"
})