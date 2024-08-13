/* notes:
1.Destructuring : destructuring the varibles of onjects to use it in future code by simple names




*/

const Course = {
    coursename: "JS in hindi" ,
    price : "1000",
    courseinstructor : "Hitesh Choudhary"
}

// course.courseinstructor  hurdle to handle this syntax everytime so we have syntaxical sugar for this alternative

const { courseinstructor } = Course
console.log(courseinstructor)