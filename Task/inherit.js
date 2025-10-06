class vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} ,is starting...`);
    }
}

class car extends vehicle {
    constructor(brand,model,mileage) {
        super(brand);
        this.model = model;
        this.mileage = mileage;
    }
    start() {
        console.log(`${this.brand} , ${this.model} and its mileage is : ${this.mileage}`);

    }
}

const car1 = new vehicle("WolkVagen", "POLO-GT", 20);
const car2 = new car("WolkVagen", "POLO-GT", 20);

car1.start();
car2.start();
