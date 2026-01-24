const student = [
  {
    name: 'Mehak',
    marks: [85, 78, 92, 88],
    isPassed: false,
  },
  {
    name: 'Faisal',
    marks: [55, 60, 48, 50],
    isPassed: false,
  },
  {
    name: 'Tanzeela',
    marks: [90, 95, 93, 89],
    isPassed: false,
  },
];
function addStudent(name, marks) {
  student.push({
    name: name,
    marks: marks,
    isPassed: false,
  });
}
addStudent('bazila', [90, 95, 93, 89]);
addStudent('Sana', [70, 65, 72, 68]);
addStudent('Heebu', [10, 5, 5, 10]);
addStudent('Insha', [50, 55, 52, 58]);
addStudent('Mansha', [10, 5, 10, 10]);

console.log(student);
function calculateAverage(marks) {
  let sum = 0;
  let average;
  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  return (average = Math.trunc(sum / marks.length));
}
console.log(calculateAverage([85, 78, 92, 88]));
console.log(calculateAverage([55, 60, 48, 50]));
console.log(calculateAverage([90, 95, 93, 89]));
console.log(calculateAverage([40, 95, 93, 89]));
console.log(calculateAverage([70, 65, 72, 68]));
console.log(calculateAverage([10, 5, 5, 10]));
console.log(calculateAverage([50, 50, 52, 58]));
console.log(calculateAverage([10, 5, 10, 10]));
function updatePassStatus() {
  let avg;
  for (let i = 0; i < student.length; i++) {
    avg = calculateAverage(student[i].marks);
    if (avg >= 40) student[i].isPassed = true;
    else student[i].isPassed = false;
  }
}
updatePassStatus();
console.log(student);
function getTopStudent() {
  let topStudent = student[0]; // assume first one is top
  let highestAvg = calculateAverage(student[0].marks);

  for (let i = 1; i < student.length; i++) {
    let avg = calculateAverage(student[i].marks);
    if (avg > highestAvg) {
      highestAvg = avg;
      topStudent = student[i];
    }
  }

  return { name: topStudent.name, average: highestAvg };
}
console.log(getTopStudent());
function listFailedStudents() {
  for (let i = 0; i < student.length; i++) {
    let fail = calculateAverage(student[i].marks);
    if (fail < 40) console.log(student[i].name);
  }
}
listFailedStudents();
