const numbers = [1,2,3,4,5];
// Basic Destructuring
const [a,b] = numbers;
console.log(a);
console.log(b);

// Skipping Values
const [, ,c] = numbers;
console.log(c);

// using spread operator
const [x,...rest] = numbers;

console.log(x);
console.log(rest);





