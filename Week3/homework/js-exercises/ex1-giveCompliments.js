'use strict'
const giveCompliment = (name) => {
    const compliments = ['great', 'lovely', 'kind', 'amazing', 'cute', 'badass', 'strong', 'fantastic', 'awesome', 'perfect'];
    const randomCompliment = Math.floor(Math.random() * compliments.length);
    console.log(`You are ${compliments[randomCompliment]}, ${name}!`);
};

giveCompliment('Atabek');
giveCompliment('Atabek');
giveCompliment('Atabek');