import {
  CHANGE_FIELD,
  TOGGLE_HERO_SELECTOR_VISIBILITY,
  SET_HEROES,
  SELECT_SLOT
} from '../_actions';

const initialState = {
  heroSelectorVisible: false,
  heroes: [null, null, null, null, null],
  micRequired: false,
  selectedSlot: null,
  mode: 'All Pick',
  region: 'North America',
  location: 'Prefer not to say',
  mood: 'Looking for friends 😍'
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
  } else if (action.type === SELECT_SLOT) {
    return Object.assign({}, state, {
      selectedSlot: action.slot
    })
  }

  return state;
}

//redux thunk
