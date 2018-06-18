import {
  CHANGE_FIELD,
  TOGGLE_HERO_SELECTOR_VISIBILITY
} from '../_actions';

const initialState = {
  heroSelectorVisible: false
};

export const GroupMakerReducer = (state=initialState, action) => {
  if(action.type === CHANGE_FIELD) {
    return Object.assign({}, state, {
      [action.field]: action.value
    });
  } else if (action.type === TOGGLE_HERO_SELECTOR_VISIBILITY) {
    return Object.assign({}, state, {
      heroSelectorVisible: action.visibility
    });
  }

  return state;
}