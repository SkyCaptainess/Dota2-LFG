import {
  TOGGLE_HERO_SELECTOR_VISIBILITY,
  TOGGLE_LOGIN_MODAL_VISIBILITY,
  TOGGLE_HOME
} from '../_actions/misc.js';

/* let onHome = window.localStorage.getItem('onHome');

if(!onHome || onHome === '1') {
  onHome = true;
} else {
  onHome = false;
} */

const initialState = {
  heroSelectorVisible: false,
  loginModalVisible: false,
  whereFrom: '',
  onHome: true
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
  }  else if (action.type === TOGGLE_HOME) {
    return Object.assign({}, state, {
      onHome: action.onHome
    })
  }

  return state;
}

