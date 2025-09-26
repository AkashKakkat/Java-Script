// Async marks a funtion but that will return a promise

async function hello() { // in function declaration

}

const sayBye = async function () { //  in function expression

}

const sayHello = async () => {  //  in Arrow-Function

}

// Await pauses the function execution until a promise is resolved/rejected
// It makes asynchronous code look and behave like syncronous code

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("DATA LOADED")
        }, 2000)
    })
}

async function getData() {
    console.log("Start");
    const result = await fetchData();
    console.log(result);
    console.log("END");



}

getData()


