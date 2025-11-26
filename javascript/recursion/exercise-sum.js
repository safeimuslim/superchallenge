/*
Challenge:

4. Sum of Array Elements

Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]

Expected Output : 21

*/

function sum(array_num) {

 if(array_num.length < 1) {
  return 0
 }
 const deleteLast = array_num.pop(); // return last number and last array will be removed
 return deleteLast + sum(array_num);
}


console.log(sum([1, 2, 3, 4, 5, 6]));

