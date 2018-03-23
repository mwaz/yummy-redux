import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import { categories } from './categories';

const allReducers = combineReducers({
  users: UserReducer,
  category: categories
});

export default allReducers;
