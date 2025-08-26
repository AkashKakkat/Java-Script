const person = {
    name: 'Akash',
    age: 21,
    isStudent: false

}
console.log(person.name);
console.log(person.age);

// add or modify datas

person.city = "New York";
console.log(person);
person.age = 31;
console.log(person);

// delete data

delete person.city;
console.log('final person details is :', person);