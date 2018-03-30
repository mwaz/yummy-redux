import {
  CATEGORY_CREATED,
  CATEGORY_EDITED,
  CATEGORY_FETCHED,
  CATEGORY_DELETED,
  MODAL_DISMISS
} from '../components/types';

export function categories(state = {}, action) {
  switch (action.type) {
    case CATEGORY_CREATED:
      return action.categoryObject;
    case CATEGORY_FETCHED:
      return action.payload;
    case CATEGORY_EDITED:
      return action.categoryObject;
    case CATEGORY_DELETED:
      return action.categoryObject;
    case MODAL_DISMISS:
      return action.categoryObject;
    default:
      return state;
  }
}
