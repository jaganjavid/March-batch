let val;

const list = document.querySelector(".collection");
const lastList = document.querySelector(".collection-item:last-child");

val = list.childNodes;
val = list.childNodes[0];

// ELEMENT > ATTRIBUTE > TEXT > COMMENT > DOCUMENT ITSELF


// Get children element nodes

val = list.children; //***
val = list.children[0];


// First Child
val = list.firstChild;
val = list.firstElementChild; /***/


// Last Child
val = list.lastChild;
val = list.lastElementChild;

// count child element
val = list.childElementCount;

// Get parent Node
val = lastList.parentElement.parentElement;

// get previos sibling
val = lastList.previousElementSibling.previousElementSibling;

// Get next sibling
val = lastList.nextElementSibling;

console.log(val);

