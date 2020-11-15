'use strict'
const numChildren = ['one', 'two', 'three', 'four', 'five'];
const partnerNames = ['Obada', 'Clement', 'Maartje', 'Renske', 'Emmanuel'];
const locations = ['Amsterdam', 'Utrecht', 'Eindhoven', 'Budel', 'Zwolle'];
const jobs = ['software engineer', 'therapist', 'unemployed', 'Prime Minister', 'Batman'];

const tellFortune = (numChildren, partnerNames, locations, jobs) => {
    const randomNumberOfChildren = Math.floor(Math.random() * numChildren.length);
    
    const randomPartnerName = Math.floor(Math.random() * partnerNames.length);
    const randomLocation = Math.floor(Math.random() * locations.length);
    const randomJob = Math.floor(Math.random() * jobs.length);
    console.log(`You will be a ${jobs[randomJob]} in ${locations[randomLocation]}, married to ${partnerNames[randomPartnerName]} with ${numChildren[randomNumberOfChildren]} kids.`)
}

tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);