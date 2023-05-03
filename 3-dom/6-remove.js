// Remove Element

const list = document.querySelectorAll("li");

// list[0].remove();
// list[1].remove();
// list[3].remove();

// Classes and Attr

const firstLi = document.querySelector("li:first-child");
const listChild = firstLi.children[0];

let val;

val = listChild.className;
val = listChild.classList;
// val = listChild.classList[1];

// DOMTOKENLIST
val = listChild.classList.add("link-test");
val = listChild.classList.remove("test");
val = listChild.classList.contains("link-test");

console.log(val);
