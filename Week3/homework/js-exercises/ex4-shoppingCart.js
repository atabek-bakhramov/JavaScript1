'use strict'

let shoppingCart = ['bananas', 'milk'];

const addToShoppingCart = (groceryItem) => {
    shoppingCart.push(groceryItem);
    if (shoppingCart.length > 3) {
        shoppingCart.shift();
    }
    let fruitsYouBought = 'You bought';
    shoppingCart.forEach((fruit) => {
        fruitsYouBought += ` ${fruit}`;
        if (shoppingCart.indexOf(fruit) === 2) {
        fruitsYouBought += `!`;
        }
    })
    // or another way
    // for (let i = 0; i < shoppingCart.length; i++) {
    //     fruitsYouBought += ` ${shoppingCart[i]}`;
    //     if (shoppingCart.indexOf(shoppingCart[i]) === 2) {
    //         fruitsYouBought += `!`;
    //     }
    // }
    console.log(fruitsYouBought);
};

addToShoppingCart('chocolate'); // Returns "You bought bananas, milk, chocolate!"
addToShoppingCart('waffles'); // Returns "You bought milk, chocolate, waffles!"
addToShoppingCart('tea'); // Returns "You bought chocolate, waffles, tea!"