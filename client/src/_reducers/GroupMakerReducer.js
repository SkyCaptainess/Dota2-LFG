import {
  CHANGE_FIELD
} from '../_actions';

const initialState = {
  mode: 'All Pick',
  region: 'North America',
  location: '',
  mood: 'Looking For Friends'
};

export const GroupMakerReducer = (state=initialState, action) => {
  if(action.type === CHANGE_FIELD) {
    return Object.assign({}, state, {
      [action.field]: action.value
    })
  }

  return state;
}