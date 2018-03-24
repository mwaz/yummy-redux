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
  }
};
