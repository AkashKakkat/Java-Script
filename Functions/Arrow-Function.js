// -----Function-Declaration-----
// function add(a,b) {
//     return a + b;
// }
// console.log(add(2,4));

//  Using Arrow Function
const add = (a, b) => a + b;
console.log(add(4, 4));

// in single parameter (no parenthesis is needed)
const square = x => x * x;
console.log("Square of 4 :", square(4));

// no parameter ( empty parentesis)
const greet = () => console.log("hloo...");
greet()

// multi-line function
const divide = (a, b) => {
    const result = a / b;
    return result;
}
console.log("Division of 10,2 is :", divide(10,2));

