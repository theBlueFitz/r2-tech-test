const express = require('express')

const recipeRouter = express.Router();

recipeRouter.route('/').get(getRecipes)

module.exports = recipeRouter;