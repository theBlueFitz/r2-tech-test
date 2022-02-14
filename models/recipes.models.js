const db = require('../data/data.json');

exports.fetchRecipes = async (exclude_ingredients = null) => {
    console.log(exclude_ingredients, 'model')
    if (!exclude_ingredients) {
        const result = await db
        return result
    } else {
        const result = await db.filter((recipe) => {
            const ingredientCheck= []
           recipe.ingredients.forEach((ingredient) => ingredientCheck.push(ingredient.name))
            if (!ingredientCheck.includes(exclude_ingredients)) {
                return recipe
            }
        })
        return result
    }
    
}