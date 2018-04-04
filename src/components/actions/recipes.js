import {
  RECIPE_CREATED,
  RECIPE_FETCHED,
  RECIPE_EDITED,
  RECIPE_DELETED
} from '../types';

import api from '../api';

export const recipeCreated = recipeObject => ({
  type: RECIPE_CREATED,
  payload: recipeObject
});

export const recipeEdited = recipeObject => ({
  type: RECIPE_EDITED,
  payload: recipeObject
});

export const recipeFetched = recipeObject => ({
  type: RECIPE_FETCHED,
  payload: recipeObject
});

export const recipeDeleted = recipeObject => ({
  type: RECIPE_DELETED,
  payload: recipeObject
});

export const createRecipe = (data, id) => dispatch =>
  api.recipe
    .createRecipe(data, id)
    .then(
      recipeObject => dispatch(recipeCreated(recipeObject)),
      api.recipe
        .getRecipes(id)
        .then(recipeObject => dispatch(recipeFetched(recipeObject)))
    );

export const editRecipe = (data, id) => dispatch =>
  api.recipe
    .editRecipe(data, id)
    .then(
      recipeObject => dispatch(recipeEdited(recipeObject)),
      api.recipe
        .getRecipes(id)
        .then(recipeObject => dispatch(recipeFetched(recipeObject)))
    );

export const deleteRecipe = id => dispatch =>
  api.recipe
    .deleteRecipe(id)
    .then(
      recipeObject => dispatch(recipeDeleted(recipeObject)),
      this.getRecipes()
    );

export const getRecipes = id => dispatch =>
  api.recipe
    .getRecipes(id)
    .then(recipeObject => dispatch(recipeFetched(recipeObject)));
