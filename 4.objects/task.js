function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

  let student1 = new Student('Tony', 'male', 37);
  let student2 = new Student('Buzz', 'female', 35);


Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

 student1.subject = 'algebra';
 student1.subject = 'geometry'
 student2.subject = 'geometry';

  // addMark(mark)
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
}
    this.marks.push(mark)
 }

    student1.addMark(5)
    student2.addMark(3);

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [];
}

  for (let i = 0; i < marks.length; i++) {
    this.marks.push(marks[i]);
  }
}
      student1.addMarks(5, 4, 5);
      student2.addMarks(2, 3, 2);


Student.prototype.getAverage = function() {
    let average;
    let sum = 0;

    for(let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
    }
        average = sum / this.marks.length;
    return +average;

}

Student.prototype.exclude = function(reason) {
  this.excluded = reason;

  delete this.subject;
  delete this.marks;

}
    student2.exclude();
    student2.excluded = 'low grades';
