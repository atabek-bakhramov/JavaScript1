'use strict'
for (let i = 0; i < 21; i++) { // In case the number 20 had to excluded (i < 20)
    if (i%2 == 0) {
        console.log(`The number ${i} is even!`);
    } else {
        console.log(`The number ${i} is odd!`);
    }
}

// Ternary operator 
// for (let i = 0; i < 21; i++) {
//     let iteratedNumber = (i%2 == 0) ? `The number ${i} is even!` : `The number ${i} is odd!`;
//     console.log(iteratedNumber);
// }