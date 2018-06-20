import {
  CHANGE_FIELD,
  TOGGLE_HERO_SELECTOR_VISIBILITY,
  SET_HEROES
} from '../_actions';

const initialState = {
  heroSelectorVisible: false,
  heroes: [null, null, null, null, null]
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
  } else if (action.type === SET_HEROES) {
    return Object.assign({}, state, {
      heroes: action.heroes
    });
  }

  return state;
}

//redux thunk
