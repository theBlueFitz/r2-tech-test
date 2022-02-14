const { fetchRecipes } = require("../models/recipes.models")


exports.getAllRecipes = async (req,res,next) => {
    return fetchRecipes()
    .then((recipes) => {
        res.status(200).send({recipes})
    })
    .catch((err) => {
        next(err);
    })
}