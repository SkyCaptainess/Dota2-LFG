import React from 'react';
import {shallow} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import {createMockStore} from 'react-test-utils';
//import store from '../store';

import Filter from '../components/UserControl/Filter';

describe('Main components', () => {
  it('renders the login modal', () => {
    shallow(<Filter/>);
  })
})