'use strict'
const numChildren = ['one', 'two', 'three', 'four', 'five'];
const partnerNames = ['Obada', 'a cactus', 'Maartje', 'your computer', 'Emmanuel'];
const locations = ['Amsterdam', 'Utrecht', 'Eindhoven', 'Budel', 'Zwolle'];
const jobs = ['software engineer', 'therapist', 'rock-star', 'Prime Minister', 'Batman'];

const tellFortune = (numChildren, partnerNames, locations, jobs) => { // a question to the mentor that checks my hw: is it okay to give names to parameters indentical to the arrays' names that already exist, like in this case?
    // a question to the mentor: what would you suggest regarding the function 'getRandomIndex', should it be outside the 'tellFortune' function - in the global scope and just invoked inside of this function or this way is good as well? 
    function getRandomIndex(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return randomIndex;
    }

    const randomNumberOfChildren = getRandomIndex(numChildren);
    const randomPartnerName = getRandomIndex(partnerNames);
    const randomLocation = getRandomIndex(locations);
    const randomJob = getRandomIndex(jobs);

    console.log(`You will be a ${jobs[randomJob]} in ${locations[randomLocation]}, married to ${partnerNames[randomPartnerName]} with ${numChildren[randomNumberOfChildren]} kid${numChildren[randomNumberOfChildren] === 'one' ? '' : 's'}.`) 
    
};
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);