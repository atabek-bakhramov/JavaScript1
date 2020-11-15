'use strict'

const cartForParty = {
    cola: 2.55,
    fanta: 1.95,
    pepsi: 2.35,
    chips: 3.49,
    pie: 8.19
};

const calculateTotalPrice = (calculatedObject) => {
    let totalCost = 0;
    for (let item in calculatedObject) {
        totalCost += calculatedObject[item];
    }
    console.log(`Total: €${totalCost}`);
};

calculateTotalPrice(cartForParty);