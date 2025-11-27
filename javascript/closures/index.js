/* 
Challenge: 
    1. Write a function that simulates a simple bank account. 
       The function should store the balance and enable users  
       to deposit money, withdraw money, and check the balance.

Requirements:

- The account balance should start at zero.

- The function should return an object containing 
  3 functions. One for depositing money, one for 
  withdrawing money, and a getBalance function which 
  logs the balance and the account holder's name.

- Deposits should add to the balance, and withdrawals should subtract 
  from it. 
*/

function createBankAccount(username) {
  let balance = 0; 

  function deposit(amount) {
   balance +=amount;
  }

  function withdraw(amount) {
   balance -=amount;
  }

  function getBalance() {
   return `${username}'s balance: ${balance}`;
  }

  return { deposit, withdraw, getBalance }
}

const daveAccount = createBankAccount('Dave');
const wendyAccount = createBankAccount('Wendy');
// Test your code by calling the functions.

daveAccount.deposit(1000)
daveAccount.deposit(500)
console.log(daveAccount.getBalance());

wendyAccount.deposit(700);
wendyAccount.withdraw(100);
console.log(wendyAccount.getBalance());

