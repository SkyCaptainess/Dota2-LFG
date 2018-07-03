import {createStore} from 'redux';
import {combineReducers} from 'redux';

import {groupMakerReducer} from './_reducers/groupMakerReducer';
import {groupReducer} from './_reducers/groupReducer';
import {miscReducer} from './_reducers/miscReducer';

const rootReducer = combineReducers({groupMaker: groupMakerReducer, group: groupReducer, misc: miscReducer})

export default createStore(rootReducer);