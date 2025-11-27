/*
Challenge:
    1. Curry this function!
    Set up three partially applied functions called 'waMessage', 
    'phoneMessage', and 'emailMessage'.
*/

// Before
// function sendMessage(type, message) {
//   return `[${type}] ${message}`;
// }


const sendMessage = (type) => (message) => `[${type}] ${message}`;

const waMessage = sendMessage('wa')
const phoneMessage = sendMessage("phone");
const emailMessage = sendMessage("email");

console.log(waMessage("Hi, apa kabar?"));
console.log(phoneMessage("Hi, apa kabar?"));
console.log(emailMessage("Hi, apa kabar?"));


