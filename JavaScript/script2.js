/* Callback Function – Real World Example

Analogy: When you order food at a restaurant, you give the waiter your number. 
You don't stand at the counter waiting — you go sit down. 
When the food is ready, they call you back. 
That number/action is the callback.

Example: Reading a File (Node.js)

*/

// const fs = require('fs');
// // "Hey, read this file... and WHEN you're done, call this function"
// fs.readFile('User-data.txt', 'utf8', (error, data) => {
//     if(error) {
//         console.log('Something went wrong!', error);
//         return;
//     }
//     console.log('File Content : ', data);
// });
// console.log('This runs first');

// fetch('User-data.txt')
// .then(response => Response.text())
// .then(data =>{
//     console.log('File Content : ', data);
// })
// .catch(error =>{
//     console.log('Something went wrong!',error);
// });
// console.log('This runs first');

document.querySelector('button').addEventListener('click', ()=>{
    console.log('Button is clicked.');
})