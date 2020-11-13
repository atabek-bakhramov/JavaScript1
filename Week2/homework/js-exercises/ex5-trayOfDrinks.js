'use strict'
const drinkTypes = ['cola', 'lemonade', 'water'];
let drinkTray = [];
for (let i = 0; i < drinkTypes.length; i++) {
    for (let j = 0; j < 2; j++) {
        if (drinkTray.length < 5) {
            drinkTray.push(drinkTypes[i]);
        }
    }
}
console.log(`Hey guys, I brought a ${drinkTray.join(', ')}!`);


// Some experimenting. To get everytime a different outcome (order of drinks), 
// but still make sure not to get the same drink more than 2 times
//
// const drinkTypes = ['cola', 'lemonade', 'water'];
// let drinkTray = [];
// while (drinkTray.length < 5) {
//     let randomDrink = Math.floor(Math.random() * drinkTypes.length);
//     if (drinkTray.indexOf(drinkTypes[randomDrink]) == -1 || drinkTray.indexOf(drinkTypes[randomDrink]) == drinkTray.lastIndexOf(drinkTypes[randomDrink])) {
//         drinkTray.push(drinkTypes[randomDrink]);
//     } else {
//         continue;
//     }
// }
// console.log(`Hey guys, I brought a ${drinkTray.join(', ')}!`);



