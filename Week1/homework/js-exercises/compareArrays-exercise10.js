'use strict'
const dogNames = ['bobik', 'chizhik', 'pyzhik', 'sharik'];
const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log('The length of the dogNames array is ' + dogNames.length);
console.log('The length of the numbers array is ' + numbers.length);

if (dogNames.length == numbers.length) {
    console.log('They are the same!');
} else {
    console.log('Two different sizes.');
}