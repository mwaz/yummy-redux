import {
  CATEGORY_CREATED,
  CATEGORY_EDITED,
  CATEGORY_FETCHED,
  CATEGORY_DELETED
} from '../components/types';

export function categories(state = {}, action) {
  switch (action.type) {
    case CATEGORY_CREATED:
      return action.categoryObject;
    case CATEGORY_FETCHED:
      return action.payload;
    default:
      return state;
  }
}
