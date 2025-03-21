// 1. Create an array of students and their names
const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 19 },
    { name: 'Charlie', age: 21 }
];

// 2. Loop through the array of students and display each student's name
students.forEach(student => {
    console.log(`${student.name} is ${student.age} years old.`);
});
