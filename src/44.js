// StudentManagement System
function addStudent(name, gender) {
  const student = { name: name, gender: gender };
  // Add the new student to the students array
  students.push(student);
}

function getAllStudents() {
  return students;
}

function removeStudent(studentId) {
  // Find the student by ID and remove it from the array
  const index = students.findIndex(student => student.id === studentId);
  if (index !== -1) {
    students.splice(index, 1);
  }
}
