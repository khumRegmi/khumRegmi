
// 1.	Write a function named addAll() that takes an indefinite amount of arguments and returns the total sum. For example:
// addAll(1, 2) = 3
// addAll(10, 10, 30, 40) = 90
// NOTE: Must use ES6 methods/features

function addAll(){
    let total = arguments.length;
    let sum = 0;
    for ( var i =0; i<total; i++){
        sum += arguments[i];
    }
    return console.log(sum);
}

addAll(1, 2);
addAll(10, 10, 30, 40);


// 2.	Write a function named addMultiply() which takes an indefinite number of arguments. All the arguments except the first one are summed up and multiplied with the first argument. Example
// addMultiply(2, 3, 5) = 16, Explanation: 3 + 5 = 8, 8 * 2 = 16
// addMultiply(2, 2, 3, 3) = 16, Explanation: 2 + 3 + 3 = 8, 8 * 2 = 16
// NOTE: Must use ES6 methods/features

function addMultiply(){
    let total = arguments.length;
    let sum = 0;
    let answer = 0;
    for ( var i = 1; i< total; i++){
        sum += arguments[i];
    }
    answer  =  sum * arguments[0];
    return console.log('The answer is ', answer);
}

addMultiply(2, 3, 5) ;
addMultiply(2, 2, 3, 3);


// var x = 0;
// function a() {
//     console.log(x);
// }

// console.log(x);
// console.log(a);
// console.log(b);

// var x = 0;
// function a() {
//     console.log(x);
// }

// var b = function() {
//     console.log(x);
// }


// var arr = [1,2,3];

// var arr2 = arr; //method 1


// console.log(arr2);


// var arr3 = [...arr]; //method 2

// arr.push(5);

// console.log(arr2);
// console.log(arr3);

// var arr4 = [];

// for (i = 0; i<arr.length; i++){  //method
//     arr4[i] = arr[i];
// }

// console.log(arr4);


// const arr5 = Array.from(arr);
// console.log(arr5);
// reference - both refers to the same memory address
//value = value is copied and have different memory addresses



// 5.	You’re given a list of students as a JavaScript object as shown below:
// let students = [
//     { name: 'A', age: 20, grades: [50, 60, 70], attendance: [1, 0, 1] },
//     { name: 'B', age: 25, grades: [35, 35, 50], attendance: [1, 1, 1] },
//     { name: 'C', age: 21, grades: [90, 60, 70], attendance: [1, 1, 0] },
//     { name: 'D', age: 22, grades: [50, 60, 70], attendance: [1, 0, 1] },
// ];

// Based on this, you want to create a new Object array named filteredStudents which would contain only the name and age property. The filtering would be done based on these conditions:
// -	All received grades are greater than or equal to 50
// -	The student was absent in at least one class (1 means present and 0 means absent)
	
// NOTE: You are strictly required to use ES6 methods only and nothing else, not even traditional loops

let students = [
    { name: 'A', age: 20, grades: [50, 60, 70], attendance: [1, 0, 1] },
    { name: 'B', age: 25, grades: [35, 35, 50], attendance: [1, 1, 1] },
    { name: 'C', age: 21, grades: [90, 60, 70], attendance: [1, 1, 0] },
    { name: 'D', age: 22, grades: [50, 60, 70], attendance: [1, 0, 1] },
];


let goodMarks = v => v >= 50;
let absent = x => x === 0;


 let filteredStudents = Array.from(students);


for ( let i = 0; i < filteredStudents.length; i++){
    if ((filteredStudents[i].grades.filter(goodMarks).length < 3 ) || (filteredStudents[i].attendance.filter(absent).length < 1)) {
        filteredStudents.splice(i,1);
    }
}

 for ( let i = 0; i < filteredStudents.length; i++){
    delete filteredStudents[i].grades;
    delete filteredStudents[i].attendance;
}
// console.log(students);
console.log(filteredStudents);
