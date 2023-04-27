let val;

const today = new Date();

let birthday = new Date("06-04-1995 11:20:00");


const monthArr = ["Jan",
 "Feb", "Mar", "Apr","May", "June", "July", 
 "Aug", "Sep", "Oct", "Nov", "Dec"];

const dayArr = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];

val = today;
val = today.getMonth();
val = today.getDay();
val = today.getDate();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(15);
birthday.setFullYear(2000);
birthday.setHours(8);
birthday.setMinutes(56);
birthday.setSeconds(2);



// console.log(val);
console.log(birthday);




// console.log(monthArr[val]);
// console.log(dayArr[val]);