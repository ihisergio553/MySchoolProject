// Node.js file for managing students and courses

var fs = require('fs');
var path = require('path');

// Define paths to student data files
var studentDataPath = path.join(__dirname, 'student_data.json');

// Define paths to course data files
var courseDataPath = path.join(__dirname, 'course_data.json');

// Function to load and parse student data from JSON file
function loadStudentData() {
  var studentDataJson = fs.readFileSync(studentDataPath, 'utf8');
  return JSON.parse(studentDataJson);
}

// Function to load and parse course data from JSON file
function loadCourseData() {
  var courseDataJson = fs.readFileSync(courseDataPath, 'utf8');
  return JSON.parse(courseDataJson);
}

// Function to add a student
function addStudent(student) {
  // Assuming student data is an object with name, age, and courses as keys
  if (!student) {
    console.error('Invalid student data.');
    return;
  }

  var studentData = loadStudentData();
  studentData.students.push(student);

  fs.writeFileSync(studentDataPath, JSON.stringify(studentData, null, '  '), 'utf8');

  console.log('Student added successfully');
}

// Function to delete a student
function deleteStudent(studentId) {
  // Assuming student data is an object with students as its key
  if (!studentId || !studentData.students[studentId]) {
    console.error('Invalid student ID.');
    return;
  }

  var studentData = loadStudentData();
  studentData.students = studentData.students.filter(student => student.id !== studentId);

  fs.writeFileSync(studentDataPath, JSON.stringify(studentData, null, '  '), 'utf8');

  console.log('Student deleted successfully');
}

// Function to update a student
function updateStudent(student) {
  // Assuming student data is an object with students as its key
  if (!student || !student.id) {
    console.error('Invalid student data.');
    return;
  }

  var studentData = loadStudentData();
  studentData.students[student.id] = student;

  fs.writeFileSync(studentDataPath, JSON.stringify(studentData, null, '  '), 'utf8');

  console.log('Student updated successfully');
}

// Example usage
var student1 = { name: 'Alice', age: 20 };
addStudent(student1);

deleteStudent(1);
