const { fetchRecipes } = require("../models/recipes.models")


exports.getAllRecipes = async (req,res,next) => {
    const {exclude_ingredients} = req.query;
    console.log(req.query)
    return fetchRecipes(exclude_ingredients)
    .then((recipes) => {
        res.status(200).send({recipes})
    })
    .catch((err) => {
        next(err);
    })
}