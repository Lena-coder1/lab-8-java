//part 1: understanding and creating objects 
let student = {
    name:"lena",
    age: 31,
    enrolled: true,
    course:[" javascript ", " database ", " operatingSystem "],
    studentInfo:function() {
      console.log("hi my name is " + this.name + "\n"+ "Enrolled ? " + this.enrolled +"\n" +" in the following classes"+this.course);

    }

};

console.log(student.name);
console.log(student.age);
student.studentInfo();

//part2: working with JSON

let jsonStudent = JSON.stringify(student);
console.log(jsonStudent);
let objectStudent = JSON.parse(jsonStudent);
console.log(objectStudent);

//part3: using Destructuring Assginment

let scores= [85,92,78,90];

