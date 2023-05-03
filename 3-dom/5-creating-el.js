// Create Element
const li = document.createElement("li");

// Add Class
li.className = "collection-item";

// Add id
li.id = "test";

// Create a text node and append
li.appendChild(document.createTextNode("Hello world"));

// Create a new link element
const link = document.createElement("a");

// Create a className
link.className = "delete-item secondary-content";

// Add icon HTML
link.innerHTML = `<i class="fa fa-remove"></i>`

// Append a into li
li.appendChild(link);

// Append li to ul
document.querySelector(".collection").appendChild(li);

console.log(li);