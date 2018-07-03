import {
  TOGGLE_HERO_SELECTOR_VISIBILITY,
  TOGGLE_LOGIN_MODAL_VISIBILITY,
} from '../_actions/misc.js';

const initialState = {
  heroSelectorVisible: false,
  loginModalVisible: false,
  whereFrom: ''
};

export const miscReducer = (state=initialState, action) => {
  if (action.type === TOGGLE_HERO_SELECTOR_VISIBILITY) {
    return Object.assign({}, state, {
      heroSelectorVisible: action.visibility
    });
  } else if (action.type === TOGGLE_LOGIN_MODAL_VISIBILITY) {
    return Object.assign({}, state, {
      loginModalVisible: action.visibility,
      whereFrom: action.whereFrom
    })
  } 

  return state;
}

