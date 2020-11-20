'use strict'

const numChildren = ['one', 'two', 'three', 'four', 'five'];
const partnerNames = ['Obada', 'a cactus', 'Maartje', 'your computer', 'Emmanuel'];
const locations = ['Amsterdam', 'Utrecht', 'Eindhoven', 'Budel', 'Zwolle'];
const jobs = ['software engineer', 'therapist', 'rock-star', 'Prime Minister', 'Batman'];

const tellFortune = (numChildren, partnerNames, locations, jobs) => { // a question to the mentor that checks my hw: is it okay to give names to parameters indentical to the arrays' names that already exist, like in this case?
    const randomNumberOfChildren = Math.floor(Math.random() * numChildren.length);
    const randomPartnerName = Math.floor(Math.random() * partnerNames.length);
    const randomLocation = Math.floor(Math.random() * locations.length);
    const randomJob = Math.floor(Math.random() * jobs.length);
    if (numChildren[randomNumberOfChildren] === 'one') {
        console.log(`You will be a ${jobs[randomJob]} in ${locations[randomLocation]}, married to ${partnerNames[randomPartnerName]} with ${numChildren[randomNumberOfChildren]} kid.`)
    } else {
        console.log(`You will be a ${jobs[randomJob]} in ${locations[randomLocation]}, married to ${partnerNames[randomPartnerName]} with ${numChildren[randomNumberOfChildren]} kids.`)
    }
};

tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);