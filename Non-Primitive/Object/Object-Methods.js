// can store function inside object are called methods

// ".this" - keyword = it's refers the objects itself(used to access properties and method)
const car = {
    brand: "BMW",
    start: function () {
        // console.log('car started');
        console.log(`${this.brand} is started`);

    }
}
car.start();