/*
Challenge:
1. Write a function that searches for an employee in 'organizationData'. The function should recursively traverse the nested objects and find all employees with a specified ID. 

Stretch Goal:
💪 Complete the challenge without declaring any variable in the global scope.
*/


import  { organizationData } from './mock.js'

const EMPLOYEE_KEY = "employees";

// Cara 1: menggunakan var untuk menampung data
// let results = []
// function searchEmployeeByid(nodes, employeeId) {
//  for (const key in nodes) {
//    // base cases
//    if(key === EMPLOYEE_KEY) {
//     const filtered = nodes[key].filter(val => val.id === employeeId); // cause employees is array
//     filtered.length && results.push(...filtered);
//    }
//    // recursive case
//    if (typeof nodes[key] === 'object') {
//     searchEmployeeByid(nodes[key], employeeId);
//    }
//  }
//  return results;
// }

// cara 2: karena pada cara satu menggunakan variable result di global scope sehingga rawan menjadi bug,
function searchEmployeeByid(nodes, employeeId) {
 let results = [];

 for (const key in nodes) {
   // base cases
   if(key === EMPLOYEE_KEY) {
    const filtered = nodes[key].filter(val => val.id === employeeId);
    filtered.length && results.push(...filtered)
   }

   if(typeof nodes[key] === 'object') {
    results.push(...searchEmployeeByid(nodes[key], employeeId));
   }
 }

 return results;
}



// search employee with id 5
const employee1 = searchEmployeeByid(organizationData, 5)
console.log("Employee1", employee1);
// search employee with id 6
const employee2 = searchEmployeeByid(organizationData, 6)
console.log("Employee2", employee2);