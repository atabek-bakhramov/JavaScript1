'use strict'
const myName = 'Atabek';
const mySurname = 'Bakh';
const myHobbies = {
    sports: 'riding a bycicle',
    arts: 'playing the piano'
};
const myDogs = {
    firstDog: 'Pyzhik',
    secondDog: 'Sharik'
};

function checkType(arg1, arg2) {
    if (typeof arg1 == typeof arg2) {
        console.log('SAME TYPE');
    } else {
        console.log('Not the same...');
    }
}

console.log(checkType(myName, mySurname));
console.log(checkType(mySurname, myHobbies));
console.log(checkType(myDogs, myName));
console.log(checkType(myDogs, mySurname));
console.log(checkType(myHobbies, myDogs));
console.log(checkType(myName, myHobbies));

console.log(typeof myName);
console.log(typeof myHobbies);