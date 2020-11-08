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

checkType(myName, mySurname);
checkType(mySurname, myHobbies);
checkType(myDogs, myName);
checkType(myDogs, mySurname);
checkType(myHobbies, myDogs);
checkType(myName, myHobbies);

console.log(typeof myName);
console.log(typeof myHobbies);