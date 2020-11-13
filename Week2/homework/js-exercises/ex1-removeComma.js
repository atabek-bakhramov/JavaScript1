'use strict'
let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString.length);
// I'm turning it into array and then turning into a string again
myString = myString.split(',').join(' ');
console.log(myString);