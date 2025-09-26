const person = { name: 'akash', age: 21, country: 'india' }

// Basic destructring
const { name, age } = person;
console.log(name);
console.log(age);

// Rename Varriables
const { country: nation } = person
console.log(nation);

// defualt values
const { gender = "male" } = person
console.log(gender);



