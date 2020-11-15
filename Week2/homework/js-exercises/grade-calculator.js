'use strict'
// the function expression accepts two parameters
const gradeCalculator = (receivedScore, maxScore) => {
    // converting scores into percentage
    const percentage = receivedScore * 100 / maxScore;
    switch (true) {
        case (percentage >= 90):
            console.log('Grade A (90% - 100%)');
            break;
        case (percentage >= 80): 
            console.log('Grade B (80% - 89%)');
            break;
        case (percentage >= 70):
            console.log('Grade C (70% - 79%)');
            break;
        case (percentage >= 60):
            console.log('Grade D (60% - 69%)');
            break;
        case (percentage >= 50):
            console.log('Grade E (50% - 59%)');
            break;
        // if none of above statements is fulfilled, then this part will run    
        default:
            console.log('Grade F (0% - 49%)');

    }
}
// Invoking the 'gradeCalculator' function with two arguments
gradeCalculator(60, 100);

