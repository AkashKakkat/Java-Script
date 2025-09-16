
// this is callback function
function greetUser(name) {
    console.log(`Hello ${name}`);
}

// this function takes another function (callback function ) as an parameter
function getUserInput(callback){
    const name="Akash";
    callback(name); // calling the callback function with the user's name
}
getUserInput(greetUser);

// CallBack is also known as callback-hell/pyramid of Doom
// callback-hell/pyramid of Doom => multiple nested callback make the code difficult to read & maintain