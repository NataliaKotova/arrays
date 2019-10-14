//console.log('Arrays');

//Array is a data doctype
//used to store many relevant values
//under the same name

//var names = ['Lucy','Peter','Antony','Yuli'];

// document.getElementById('result').innerHTML = names[3];
//
//
// document.getElementById('result').innerHTML += '</br>' + names[1];
//
// document.getElementById('result').innerHTML += '</br>' + names[2];
//
// document.getElementById('result').innerHTML += '</br>' + names[0];
//
// document.getElementById('result').innerHTML += '</br>' + names;

//loop to repeat a certain number of times
//i++ means i is incremented by itself (i=i+1)
// for (var i=0; i<4; i++){
//
//   document.getElementById('result').innerHTML += '</br>' + names[i];
// }
//searching for Peter in the list
// for (var i=0; i<4; i++){
//   if (names[i] === 'Peters') {
//   document.getElementById('result').innerHTML
//   += '</br> Yes, ' + names[i] + ' is found in the list';
//   break;
// }
//
//
// }
//
//  document.getElementById('result').innerHTML
//  += '</br> Sorry, ' + Peters + ' is not found in the list';


// Task #1
// console.log('Arrays');
//
// var names = ['Lucy', 'Peter', 'Antony', 'Yuli'];
//
// document.getElementById('result').innerHTML += '</br>' + names[3];
// document.getElementById('result').innerHTML += '</br>' + names;
//
// //Write a function that takes an array of elements and returns true if all the elements are strings.
//
// var array = ["name", "surname"];
//
// function checkArray (array) {
//   var arrayToCheck = array;
//   for(var i = 0; i <arrayToCheck.length; i++){
//     if (typeof arrayToCheck[i]!= 'string'){
//       return false;
//     }
//   }
//   return true;
// }


// Task #2 Write one function for each of the following that takes an array of unsorted numbers and returns a number:
// the average or mean (sum of elements ÷ count of elements)
// the minimum number (smallest element)
// the maximum number (largest element)
// the median (the middle element when sorted)
// Extra for experts: the mode (the element that appears most frequently, false if nothing is repeated)

// function countSum (array) {
//   var arrayToProcess = array;
//   var result=0;
//   for(var i=0; i<arrayToProcess.length; i++) {
//     result += arrayToProcess[i];
//   }
//   return result;
// }

// function findMinimum(array) {
//   var arrayToProcess = array;
//   var arrayMinimum = 0;
//   for(var i=0; i < arrayToProcess.length; i++) {
//     if(arrayToProcess[i] > arrayToProcess[i+1]) {
//       arrayMinimum = arrayToProcess[i+1];
//     }
//   }
//   return arrayMinimum;
// // }
//
// function findMaximum(array) {
//   var arrayToProcess = array;
//   var arrayMaximum = 0;
//   for(var i=0; i < arrayToProcess.length; i++) {
//     if(arrayToProcess[i] < arrayToProcess[i+1]) {
//       arrayMaximum = arrayToProcess[i+1];
//     }
//   }
//   return arrayMaximum;
// }
//
// function findMedium (array) {
//   var arrayToProcess = array;
//   var arrayMedium;
//   var arraySum = 0;
//   for(var i = 0; i < arrayToProcess.length; i++) {
//     arraySum += arrayToProcess[i];
//
//   }
//   arrayMedium = arraySum / arrayToProcess.length;
//   return arrayMedium;
// }


// TO BE COMPLETED the median (the middle element when sorted)
//It is middle element when n is odd and average of middle two elements when n is even.



// function findMedian (array) {
//   var arrayToProcess = array;
//   var isOddOrEven = arrayToProcess/2;
//   var arrayMedianIndex;
//   for (var i = 0; i <arrayToProcess.length; i++) {
//     if (isOddOrEven > 0) {
//       arrayMedianIndex = Math.ceil(arrayToProcess/2);
//     }
//     else {
//       arrayMedianIndex = arrayToProcess/2;
//     }
//   }
// }

// A small company has ‘n’ employees. Each employee takes part in 3 projects. Their performance on each project is recorded in percentage and averaged.
// For example employee1 takes part in projectA, projectB and projectC. The performance of employee1 in projectA is 83%, in projectB is 93% and in project is 100%.. Finding the average of all the projects gives the overall performance of this employee1.
// Store each project’s data in an array separatey.
// Find the name of the employee whose performance is outstanding and produce the percentage.
// Also apply the following labels to each employee according to their overall performance.
// If the overall percentage is greater than 90%, then “eligible for increment”, else if it is greater than 70% and less than 90%, then “eligible to continue in project team”, otherwise “change designation”.
// Write an algorithm for the above scenario.


var progectA = [];
var projectB = [];
var projectC = [];

var employees = [];
var employeesNames = [];
var emplayees = parseInt(prompt("enter names"));

document.getElementById('result').innerHTML += ;
