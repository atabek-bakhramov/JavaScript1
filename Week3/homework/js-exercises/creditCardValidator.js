'use strict'
const validateCreditNumber = (creditCardNumber) => {
    const stringedCardNumber = creditCardNumber.toString();
    if (stringedCardNumber.length < 16) {
        console.log(`Invalid! The input ${creditCardNumber} should be 16 digits!`);
    } else if (stringedCardNumber.match(/[a-zA-Z]/g)) {
        console.log(`Invalid! The input ${creditCardNumber} should contain only numbers!`);
    } else if () {

    } else {
        console.log('everything is correct!')
    }

}

validateCreditNumber('1231231231231231');