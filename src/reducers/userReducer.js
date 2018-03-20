import { USER_LOGGED_IN, USER_REGISTERED } from '../components/types';

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    case USER_REGISTERED:
      return action.user;
    default:
      return state;
  }
}
