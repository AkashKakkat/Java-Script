// A promise in js is an object that represent the eventual completion / failure of an Asynchronous opertaion and its resulting value

// Resolve => Called when the operation is successfull
// Reject => Called when the operation is fails
// Then => Execute when the promise is resolved
// Catch => Execute when the promise is rejected
// Finally => Execute regardless of whether the promise is resolved/rejected

// SYNTAX

// new Promise = new Promise((resolve,reject) => {

// })


// Creating Promise

let mypromise = new Promise((resolve,reject) => { //creating promise Object

    let success = false;
    // setTimeout(() => {
        if (success) {
            resolve("promise is resolved successfully")
        } else {
            reject("promise is rejected successfully")
        }
    // },2000)
})

mypromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Promise execution finished"));
