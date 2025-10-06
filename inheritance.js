// one class can inherits properties and method  from another class
//  by using 'Extents' keyword

// base class
class animal {
    constructor(name) { // for initialise the properties
        this.name = name;
    }
    function speak() {
        console.log(`${this.name} makes a sound`);
    }
}
// derived class inherits from animal
class dog extends animal {
    constructor(name, breed) {
        super(name); // calls the parent constructer / to invoke the parent  class
        this.breed = breed;
    }
    // override speak method (polymorphism)
    speak() {
        console.log(`${this.name}-${this.breed} bark...`);

    }
}
const Dog = new dog("rex", "german shepherd");
Dog.speak()