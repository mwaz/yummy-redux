import {
  CATEGORY_CREATED,
  CATEGORY_EDITED,
  CATEGORY_FETCHED,
  CATEGORY_DELETED
} from '../types';
import api from '../api';
import axiosInstance from '../axiosInstance';

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

export const createCategory = categoryName => dispatch =>
  api.categories
    .createCategory(categoryName)
    .then(categoryObject => dispatch(categoryCreated(categoryObject)));

export const editCategory = (categoryId, categoryName) => dispatch =>
  api.categories
    .editCategory(categoryId, categoryName)
    .then(categoryObject => dispatch(categoryEdited(categoryObject)));

export const getCategories = () => dispatch =>
  axiosInstance
    .get('/categories/')
    .then(response => dispatch(categoryFetched(response.data)));
