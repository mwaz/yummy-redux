import {
  RECIPE_CREATED,
  RECIPE_DELETED,
  RECIPE_EDITED,
  RECIPE_FETCHED
} from '../components/types';

export function recipes(state = {}, action = {}) {
  switch (action.type) {
    case RECIPE_CREATED:
      return action.recipeObject;
    case RECIPE_DELETED:
      return action.recipeObject;
    case RECIPE_EDITED:
      return action.recipeObject;
    case RECIPE_FETCHED:
      return action.recipeObject;
    default:
      return state;
  }
}
