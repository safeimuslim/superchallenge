/*
Challenge:

3. Range of Integers Using Recursion

Write a JavaScript program to get integers in the range (x, y) using recursion.

Example : range(2, 9)

Expected Output : [3, 4, 5, 6, 7, 8]

*/


function getRangeNumber(x,y) {
 if(y - x === 1) {
  return []
 } else {
  y -= 1
  return [...getRangeNumber(x, y), y];
 }
}

console.log(getRangeNumber(2, 9))
