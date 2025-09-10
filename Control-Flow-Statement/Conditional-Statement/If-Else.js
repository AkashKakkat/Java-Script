const prompt = require('prompt-sync')();

let age = prompt("Enter the age :");


// let age = 13;
if (age >= 18) {
    console.log("U can vote...!");
} else {
    console.log("U are not eligible..!!");
}


