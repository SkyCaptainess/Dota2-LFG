import React from 'react';
import {shallow, mount} from 'enzyme';

import LoginModal from '../components/auth/LoginModal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Main components', () => {
  it('renders', () => {
    shallow(<LoginModal/>);
  })
})