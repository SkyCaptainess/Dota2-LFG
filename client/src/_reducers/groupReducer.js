import {
  CREATE_GROUP,
  ADD_ALL_GROUPS,
  UPDATE_GROUP,
  SET_CREATED_GROUP
} from '../_actions/group.js';

const initialState = {
  groups: [],
  createdGroup: null
};

export const groupReducer = (state=initialState, action) => {
  if (action.type === CREATE_GROUP) {
    return Object.assign({}, state, {
      groups: [action.group, ...state.groups]
    });
  } else if (action.type === ADD_ALL_GROUPS) {
    return Object.assign({}, state, {
      groups: action.groups
    });
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
  } else if (action.type === SET_CREATED_GROUP) {
    return Object.assign({}, state, {
      createdGroup: action.createdGroup
    })
  }

  return state;
}
