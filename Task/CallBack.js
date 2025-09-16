const prompt = require('prompt-sync')();
let number = prompt("Enter the number :");


// this is callback function
function square(number) {
    console.log(`Square of ${number}`);
}

// this function takes another function (callback function ) as an parameter
function getUserInput(callback) {
    let result = number * number;
    callback(result); // calling the callback function with the user's name
}
getUserInput(square);

// CallBack is also known as callback-hell/pyramid of Doom
// callback-hell/pyramid of Doom => multiple nested callback make the code difficult to read & maintain