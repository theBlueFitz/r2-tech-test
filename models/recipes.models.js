const db = require('../data/data.json');

exports.fetchRecipes = async () => {
    const result = await db
    console.log(result)
    return result
}