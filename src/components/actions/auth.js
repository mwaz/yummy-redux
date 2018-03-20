import { USER_LOGGED_IN, USER_REGISTERED, USER_LOGGED_OUT } from '../types';

import api from '../api';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userRegistered = user => ({
  type: USER_REGISTERED,
  user
});
export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.token = user.access_token;
    dispatch(userLoggedIn(user));
  });

export const register = userdetails => dispatch =>
  api.user.register(userdetails).then(user => dispatch(userRegistered(user)));

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch(userLoggedOut());
};
