// HTMLCOLLECTION
let val;

val = document;

val = document.all;
val = document.body;
val = document.doctype;
val = document.URL;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;

val = document.links;
val = document.links[0];
val = document.links[0].className; // String
val = document.links[0].classList; //  DOMTOKENLIST
val = document.links[0].classList[2];


val = document.images;
val = document.images[0];
val = document.images[0].src;


val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[1].getAttribute("src");

// console.log(val);

let scripts = document.scripts;

let scriptArr = Array.from(scripts);

// for(let i = 0; i < scripts.length; i++){
//      console.log(scripts[i].src)
// }


// scriptArr.forEach(function(script, index, arr){
//     console.log(script.src, index);
//     console.log(arr)
// })