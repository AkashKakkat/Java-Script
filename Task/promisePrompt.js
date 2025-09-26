const prompt = require('prompt-sync')();
let number = prompt("Enter the number :");

const myPromise = new Promise((resolve, reject) => {
    if (number % 2 == 0) {
        resolve(number  +  " is an EVEN number")
    } else {
        reject(number  +  " is not an EVEN number")

    }
})

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Execution is Done..."));
