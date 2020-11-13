'use strict'
const listOfBooks = [
    {
        title: 'Hard Times',
        author: 'Charles Dickens',
        alreadyRead: true
    },
    {
        title: 'The Grapes of Wrath',
        author: 'John Steinbeck',
        alreadyRead: true
    },
    {
        title: 'The Fellowship of the Ring',
        author: 'Peter Jackson',
        alreadyRead: false
    }
];

for (let i = 0; i < listOfBooks.length; i++) {
    if (listOfBooks[i].alreadyRead == true) {
        console.log(`${listOfBooks[i].title} by ${listOfBooks[i].author}. You already read "${listOfBooks[i].title}".`);
    } else {
        console.log(`${listOfBooks[i].title} by ${listOfBooks[i].author}. You still need to read "${listOfBooks[i].title}".`);
    }
}

// Ternary operator
// for (let i = 0; i < listOfBooks.length; i++) {
//     let basedOnReadOrNot = (listOfBooks[i].alreadyRead == true) ? `${listOfBooks[i].title} by ${listOfBooks[i].author}. You already read "${listOfBooks[i].title}".` : `${listOfBooks[i].title} by ${listOfBooks[i].author}. You still need to read "${listOfBooks[i].title}".`;
//     console.log(basedOnReadOrNot);
// }