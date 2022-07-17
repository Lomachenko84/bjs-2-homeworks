function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.subject = null;
  this.averagescore = null// Ваш код
  this.expelled = null// Ваш код

}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName; //ваш код
}
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
    // добавить первую оценку 
  } else {
    this.marks.push(mark);
    //puc добавить вторую и последующие оценки в массив
  }
}
Student.prototype.addMarks = function (...theMarks) {
  if (this.marks === undefined) {
    this.marks = [...theMarks];
    // добавить первую оценку 
  } else {
    this.marks.push(...theMarks);
  }
}
Student.prototype.getAverage = function () {
  let sum
  sum = 0
  for (let i = 0; i < this.marks.length; i++) {
    sum = sum + this.marks[i];
  }
  let avg = sum / this.marks.length
  return avg;
}
Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}