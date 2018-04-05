import axiosInstance from './axiosInstance';

export default {
  user: {
    login: credentials =>
      axiosInstance
        .post('/auth/login', credentials)
        .then(response => response.data),

    register: userdetails =>
      axiosInstance
        .post('/auth/register', userdetails)
        .then(response => response.data)
  },
  categories: {
    createCategory: categoryName =>
      axiosInstance
        .post('categories/', categoryName)
        .then(response => response.data),

    editCategory: (categoryName, categoryId) =>
      axiosInstance
        .put(`categories/${categoryId}`, categoryName)
        .then(response => response.data),

    deleteCategory: categoryId =>
      axiosInstance
        .delete(`categories/${categoryId}`)
        .then(response => response.data),

    getCategories: () =>
      axiosInstance.get('/categories/').then(response => response.data)
  },
  recipes: {
    createRecipe: (recipeData, categoryID) =>
      axiosInstance
        .post(`/categories/${categoryID}/recipes/`, recipeData)
        .then(response => response.data),

    editRecipe: (recipeData, categoryID, id) =>
      axiosInstance
        .put(`/categories/${categoryID}/recipes/${id}`, recipeData)
        .then(response => response.data),

    deleteRecipe: (categoryID, id) =>
      axiosInstance
        .delete(`/categories/${categoryID}/recipes/${id}`)
        .then(response => response.data),

    getRecipes: categoryID =>
      axiosInstance
        .get(`/categories/${categoryID}/recipes/`)
        .then(response => response.data)
  }
};
