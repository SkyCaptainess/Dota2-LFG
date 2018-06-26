import {
  CHANGE_FIELD,
  TOGGLE_HERO_SELECTOR_VISIBILITY,
  SET_HEROES,
  SELECT_SLOT,
  CREATE_GROUP,
  ADD_ALL_GROUPS,
  TOGGLE_LOGIN_MODAL_VISIBILITY,
  UPDATE_GROUP
} from '../_actions';

const initialState = {
  heroSelectorVisible: false,
  loginModalVisible: false,
  heroes: [null, null, null, null, null],
  selectedSlot: undefined,
  mode: 'All Pick',
  region: 'North America',
  location: 'Prefer not to say',
  mood: 'Looking for friends 😍',
  groups: []
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
    console.log('hi');
    return Object.assign({}, state, {
      selectedSlot: action.slot
    })
  } else if (action.type === CREATE_GROUP) {
    return Object.assign({}, state, {
      groups: [action.group, ...state.groups]
    });
  } else if (action.type === ADD_ALL_GROUPS) {
    return Object.assign({}, state, {
      groups: action.groups
    });
  } else if (action.type === TOGGLE_LOGIN_MODAL_VISIBILITY) {
    return Object.assign({}, state, {
      loginModalVisible: action.visibility,
      whereFrom: action.whereFrom
    })
  } else if (action.type === UPDATE_GROUP) {
    console.log('hi')
    return Object.assign({}, state, {
      groups: state.groups.map(group => {
        if(group.steamid32 === action.group.steamid32) {
          return action.group
        } else {
          return group
        }
      })
    })
  }

  return state;
}

//redux thunk
