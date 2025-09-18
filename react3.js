// Base Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Subclass: Student
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // call parent constructor
    this.course = course;
  }

  // overriding displayInfo
  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }
}

// Subclass: Teacher
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // overriding displayInfo
  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }
}

// Create instances
const student1 = new Student("Aarav", 20, "Computer Science");
const teacher1 = new Teacher("Mr. Sharma", 40, "Mathematics");

// Demonstration
console.log("---- Student Details ----");
console.log(student1.displayInfo());

console.log("---- Teacher Details ----");
console.log(teacher1.displayInfo());
