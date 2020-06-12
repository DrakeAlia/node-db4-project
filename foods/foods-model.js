const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development);

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredients,
  add,
  findById,
  addStep,
  update,
  remove,
};


function getRecipes() {
  return db("recipes as r").select("*");
}

function getShoppingList(id) {
  return db
    .select("i.name", "ri.quantity")
    .from("recipes_ingredients as ri")
    .join("ingredients as i", "ri.ingredients_id", "=", "i.id")
    .join("recipes as r", "ri.recipes_id", "=", "r.id")
    .where({ recipes_id: id });
}


function getInstructions(id) {
  return db
    .select("s.step_number", "s.instruction")
    .from("steps as s")
    .join("recipes as r", "s.recipes_id", "=", "r.id")
    .where({ recipes_id: id });
}
function getRecipesByIngredients(id) {
  return db
    .select("recipes.name")
    .from("recipes")
    .join(
      "recipe_ingredients",
      "recipes.id",
      "=",
      "recipe_ingredients.recipes_id"
    )
    .join(
      "ingredients",
      "recipe_ingredients.ingredients_id",
      "=",
      "ingredients.id"
    )
    .where({ "ingredients.id": id });
}


function findById(id) {
  return db("recipes").where("id", id).first();
}

function add(foods) {
  return db("recipes")
    .insert(foods, "id")
    .then((ids) => {
      return findById(ids[0]);
    });
}

function addStep(stepData, id) {
  return db("steps")
    .insert(stepData, "id")
    .then((ids) => {
      return findById(ids[0]);
    });
}



function update(changes, id) {
  return db("foods")
    .where({ id }) //{id} grabbing whole object
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db("foods").where({ id }).del();
}