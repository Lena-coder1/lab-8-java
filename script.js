//part 1: understanding and creating objects 
let student = {
    name:"lena",
    age: 31,
    enrolled: true,
    course:[" javascript ", " database ", " operatingSystem "],
    studentInfo:function() {
      console.log("hi my name is " + this.name + "\n"+ "Enrolled ? " + this.enrolled +"\n" +" in the following classes"+this.course+"\n");

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
let [course1, course2, course3]= student.course;
console.log("\n"+"first class: " + course1);
console.log("second class: " + course2);
console.log("third class: " + course3);



let scores= [85,92,78,90];
let [grade1, grade2, grade3, grade4]=scores;
console.log("grade1= " + grade1);
console.log("grade2= " + grade2);

//part4: the spread operator
let cloneStudent = {...student, gradYear: 2025};
console.log(cloneStudent);


let newCourse = ["english" , "math" , "intoToPython"];
let mergedCourse= [...cloneStudent.course, ...newCourse];
cloneStudent.course = mergedCourse;

console.log(cloneStudent);

// part 5: object methods

let modStudent = {
    name:"lena",
    age: 31,
    enrolled: true,
    course:[" javascript ", " database ", " operatingSystem "],
    newcourse:function(courseName){
       
        this.course.push(courseName);
        console.log ("new course list: " + this.course);
    },
    totalCourse:function(){
        let amount= this.course.length;
       console.log("the amount of courses " + this.name + " is taking = "+ amount);
    },
    studentInfo:function() {
      console.log("hi my name is " + this.name + "\n"+ "Enrolled ? " + this.enrolled +"\n" +" in the following classes"+this.course+"\n");

    }

};
modStudent.newcourse(" web design ");
modStudent.studentInfo();
modStudent.totalCourse();

//bonus 

let grades= [85,92,78,90];
let [grd1, grd2, grd3, grd4]=grades;
let gradeAvg =(grd1+grd2+grd3+grd4)/grades.length;

console.log("grade average is:" + gradeAvg);