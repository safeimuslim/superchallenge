/* 
Challenge:

5. Exponentiation

Write a JavaScript program to compute the exponent of a number.

Note : The exponent of a number says how many times the base number is used as a factor.

8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
*/

function exponentiation(base, exponent) {
 if(exponent === 0) {
  return 1
 }

 console.log(base, exponent);
 

 return base * exponentiation(base, exponent-1);
}

console.log(exponentiation(8, 2)); 




