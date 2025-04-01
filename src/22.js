function addStudent(studentName) {
  const student = {
    id: new Date().getTime(),
    name: studentName,
    age: Math.floor(Math.random() * 10 + 1)
  };
  students.push(student);
}

function updateStudent(studentId, updatedData) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === studentId) {
      students[i] = { ...students[i], ...updatedData };
      break;
    }
  }
}

function deleteStudent(studentId) {
  const index = students.findIndex(student => student.id === studentId);
  students.splice(index, 1);
}
