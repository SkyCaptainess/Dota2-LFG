import {
  CHANGE_FIELD,
  SET_HEROES,
  SELECT_SLOT,
} from '../_actions/index.js';

const initialState = {
  heroes: [null, null, null, null, null],
  selectedSlot: undefined,
  mode: 'All Pick',
  region: 'US East',
  location: 'Prefer not to say',
  mood: 'Looking for Friends 😍'
};

export const groupMakerReducer = (state=initialState, action) => {
  if(action.type === CHANGE_FIELD) {
    return Object.assign({}, state, {
      [action.field]: action.value
    });
  } else if (action.type === SET_HEROES) {
    return Object.assign({}, state, {
      heroes: action.heroes
    });
  } else if (action.type === SELECT_SLOT) {
    console.log('hi');
    return Object.assign({}, state, {
      selectedSlot: action.slot
    })
  } 

  return state;
}
