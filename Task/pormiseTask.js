let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => (Math.random() > 0.5 ? resolve("SUCCESS") : reject("FAILED")), 2000);
});
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(()  => console.log("EXECUTION IS FINISHED"));
    
