import {
  CATEGORY_CREATED,
  CATEGORY_EDITED,
  CATEGORY_FETCHED,
  CATEGORY_DELETED
} from '../types';
import api from '../api';

export const categoryCreated = categoryObject => ({
  type: CATEGORY_CREATED,
  categoryObject
});

export const categoryEdited = categoryObject => ({
  type: CATEGORY_EDITED,
  categoryObject
});

export const categoryFetched = categoryObject => ({
  type: CATEGORY_FETCHED,
  payload: categoryObject
});

export const categoryDeleted = categoryObject => ({
  type: CATEGORY_DELETED,
  categoryObject
});

// {
//   /** Action Creators **/
// }

export const createCategory = categoryName => dispatch =>
  api.categories
    .createCategory(categoryName)
    .then(categoryObject => dispatch(categoryCreated(categoryObject)));

export const editCategory = (name, id) => dispatch =>
  api.categories
    .editCategory(name, id)
    .then(categoryObject => dispatch(categoryEdited(categoryObject)));

export const deleteCategory = categoryId => dispatch =>
  api.categories
    .deleteCategory(categoryId)
    .then(categoryObject => dispatch(categoryDeleted(categoryObject)));

export const getCategories = () => dispatch =>
  api.categories
    .getCategories()
    .then(categoryObject => dispatch(categoryFetched(categoryObject)));
