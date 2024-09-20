//import * as util from "./util.js";
//console.log(util.number, util.name);

//const hobbies = ["skating","music","reading"];
//console.log(hobbies[0]);

//hobbies.push("working");
//console.log(hobbies);

//const index = hobbies.findIndex((item) => item ===  "music");

//console.log(index)

//const editedHobbies = hobbies.map((item) => ({text: item}));
//console.log(editedHobbies)

/*const password = prompt("Your Password");

if (password === "Hello") {
    alert("Hello works");
} else if (password === "hello") {
    alert("hello works");
} else {
    alert("ACESS DENIED!");
} */

/*const numbers = ["NEVER","GONNA","GIVE","YOU","UP","NEVER","GONNA","LET","YOU","DOWN"]

for (const number of numbers) {
    alert(number);
}*/

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for (const number of numbers) { 
    setTimeout(() => console.log(number + " SECONDS HAVE PASSED"), number * 1000)
}
