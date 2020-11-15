'use strict'

let shoppingCart = ['bananas', 'milk'];

const addToShoppingCart = (groceryItem) => {
    shoppingCart.push(groceryItem);
    if (shoppingCart.length > 3) {
        shoppingCart.shift();
    }
    console.log(shoppingCart);
}

addToShoppingCart('chocolate'); // Returns "You bought bananas, milk, chocolate!"
addToShoppingCart('waffles'); // Returns "You bought milk, chocolate, waffles!"
addToShoppingCart('tea'); // Returns "You bought chocolate, waffles, tea!"