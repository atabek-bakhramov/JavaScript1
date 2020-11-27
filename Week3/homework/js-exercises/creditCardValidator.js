'use strict'

const validateLength = (creditCardNumber) => {
    return (creditCardNumber.length === 16) ? true : false;
};

const validateAllNumbers = (creditCardNumber) => {
    return isNaN(creditCardNumber) ? false : true;
};

const validateDifferentDigits = (creditCardNumber) => {
    const arrOfCreditCardNumber = creditCardNumber.split('');
    const setOfCreditCardNumber = new Set(arrOfCreditCardNumber);
    return (setOfCreditCardNumber.size) > 1 ? true : false;
};

const validateLastEvenDigit = (creditCardNumber) => {
    return creditCardNumber % 2 === 0 ? true : false;
};

function validateSumOfNumbers(creditCardNumber) {
    const sum = creditCardNumber.split('').reduce(function(acc, elem) {
        acc = acc + parseInt(elem, 10);
        return acc;
    }, 0);
    return sum > 16 ? true : false;
};

const validateCreditNumber = (creditCardNumber) => {
    const trimmedString = creditCardNumber.split(' ').join('');
    if (!validateLength(trimmedString)) {
        console.log(`Invalid! The input ${creditCardNumber} should equal 16 digits!`);
    } else if (!validateAllNumbers(trimmedString)) {
        console.log(`Invalid! The input ${creditCardNumber} should contain only numbers!`);
    } else if (!validateDifferentDigits(trimmedString)) {
        console.log(`Invalid! The input ${creditCardNumber} should contain at least 2 different types of numbers!`);
    } else if (!validateLastEvenDigit(trimmedString)) {
        console.log(`Invalid! The input ${creditCardNumber} should be even!`);
    } else if (!validateSumOfNumbers(trimmedString)) {
        console.log(`Invalid! The ${creditCardNumber}'s sum should be greater than 16!`);
    } else {
        console.log(`Success! The input ${creditCardNumber} is a valid credit card number!`);
    }
};


// validateCreditNumber('a92332119c011112'); // Returns "Invalid! The input a92332119c011112 should contain only numbers!
// validateCreditNumber('4444444444444444'); // Returns "Invalid! The input 4444444444444444 should contain at least 2 different types of numbers!
// validateCreditNumber('6666666666661666'); // Returns "Success! The input 6666666666661666 is a valid credit card number!
// validateCreditNumber('1231231212121211'); // Returns "Success! The input 6666666666661666 is a valid credit card number!
// validateCreditNumber('12312312'); // Returns "Invalid! The input 12312312 should equal 16 digits!
// validateCreditNumber('0000000000001122'); // Returns "Invalid! The 0000000000001122's sum should be greater than 16!
// validateCreditNumber('1111 1111 1111 1112'); // Returns "Success! The input 1111 1111 1111 1112 is a valid credit card number!
// validateCreditNumber('11 11 11 11 11 11 11 12'); // Returns "Success! The input 11 11 11 11 11 11 11 12 is a valid credit card number!
// validateCreditNumber('00 01 11 11 11 11 11 12'); // Returns "Invalid! The 00 01 11 11 11 11 11 12's sum should be greater than 16!

