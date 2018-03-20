import { USER_LOGGED_IN } from '../types';
import { USER_REGISTERED } from '../types';

import api from '../api';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userRegistered = user => ({
  type: USER_REGISTERED,
  user
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));

export const register = userdetails => dispatch =>
  api.user.register(userdetails).then(user => dispatch(userRegistered(user)));
