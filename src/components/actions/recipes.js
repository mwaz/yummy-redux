import {
  RECIPE_CREATED,
  RECIPE_FETCHED,
  RECIPE_EDITED,
  RECIPE_DELETED
} from '../types';

import api from '../api';

export const recipeCreated = recipeObject => ({
  type: RECIPE_CREATED,
  recipeObject
});

export const recipeEdited = recipeObject => ({
  type: RECIPE_EDITED,
  recipeObject
});

export const recipeFetched = recipeObject => ({
  type: RECIPE_FETCHED,
  recipeObject
});

export const recipeDeleted = recipeObject => ({
  type: RECIPE_DELETED,
  recipeObject
});

// {
//   /** Action Creators **/
// }

export const createRecipe = (data, categoryId) => dispatch =>
  api.recipes
    .createRecipe(data, categoryId)
    .then(recipeObject => dispatch(recipeCreated(recipeObject)));

export const editRecipe = (data, categoryId, id) => dispatch =>
  api.recipes
    .editRecipe(data, categoryId, id)
    .then(recipeObject => dispatch(recipeEdited(recipeObject)));

export const deleteRecipe = (categoryId, id) => dispatch =>
  api.recipes
    .deleteRecipe(categoryId, id)
    .then(recipeObject => dispatch(recipeDeleted(recipeObject)));

export const getRecipes = id => dispatch =>
  api.recipes
    .getRecipes(id)
    .then(recipeObject => dispatch(recipeFetched(recipeObject)));
