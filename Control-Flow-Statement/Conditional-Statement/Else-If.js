const prompt = require('prompt-sync')();
let mark = prompt("Enter the mark :");


if (mark >= 90) {
    console.log("Grade : A");
} else if (mark >= 80) {
    console.log("Grade : B");
} else if (mark >= 70) {
    console.log("Grade : C");
}
else {
    console.log("Grade : F");
}


