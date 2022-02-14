const express = require('express');
const { getAllRecipes } = require('../controllers/recipes.controllers');

const recipeRouter = express.Router();

recipeRouter.route('/').get(getAllRecipes)

module.exports = recipeRouter;