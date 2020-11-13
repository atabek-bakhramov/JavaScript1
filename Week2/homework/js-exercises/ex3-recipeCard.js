'use strict'
const myRecipe = {};
myRecipe.title = 'Fruit Salad';
myRecipe.servings = 4;
myRecipe.ingredients = ['1 apple', '2 bananas', '1 ananas'];

for (let item in myRecipe) {
    if (item == 'title') {
        console.log(`Meal name: ${myRecipe[item]}`);
    } else if (item == 'servings') {
        console.log(`Serves: ${myRecipe[item]}`);
    } else {
        console.log(`Ingedients: ${myRecipe[item][0]}, ${myRecipe[item][1]}, ${myRecipe[item][2]}`);
    }
}