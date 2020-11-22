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
    if (!validateLength(creditCardNumber)) {
        console.log(`Invalid! The input ${creditCardNumber} should equal 16 digits!`);
    } else if (!validateAllNumbers(creditCardNumber)) {
        console.log(`Invalid! The input ${creditCardNumber} should contain only numbers!`);
    } else if (!validateDifferentDigits(creditCardNumber)) {
        console.log(`Invalid! The input ${creditCardNumber} should contain at least 2 different types of numbers!`);
    } else if (!validateLastEvenDigit(creditCardNumber)) {
        console.log(`Invalid! The input ${creditCardNumber} should be even!`);
    } else if (!validateSumOfNumbers(creditCardNumber)) {
        console.log(`Invalid! The ${creditCardNumber}'s sum should be greater than 16!`);
    } else {
        console.log(`Success! The input ${creditCardNumber} is a valid credit card number!`);
    }
};


validateCreditNumber('a92332119c011112'); // Returns "Invalid! The input a92332119c011112 should contain only numbers!
validateCreditNumber('4444444444444444'); // Returns "Invalid! The input 4444444444444444 should contain at least 2 different types of numbers!
validateCreditNumber('6666666666661666'); // Returns "Success! The input 6666666666661666 is a valid credit card number!