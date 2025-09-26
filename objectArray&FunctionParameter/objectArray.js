const students = [
    {name:'Akash',age:21,grade:'A+'},
    {name:'Ajay',age:20,grade:'A'},
    {name:'Abhi',age:19,grade:'B+'}
]

// accessing datas
console.log(students[0].name);
console.log(students[0].age);

// looping through object array
students.forEach(stdnts => {
    console.log(`${stdnts.name} is ${stdnts.age} years old. His grade is ${stdnts.grade}`);
    
})
