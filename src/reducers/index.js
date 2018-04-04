import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import { categories } from './categories';
import { recipes } from './recipes';

const allReducers = combineReducers({
  users: UserReducer,
  category: categories,
  recipes: recipes
});

export default allReducers;
