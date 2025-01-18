// Test weather the Notifications component renders without crashing

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';

describe('Testing the Notifications Component', () => {
  
    let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it ('renders Notifications without crashing', () => {
    expect(wrapper.exists()).equal(true);
  });

  it ('renders Notifications with 3 list items', () => {
    expect(wrapper.find('li')).to.have.lengthOf(3);
  });

  it ('renders the text "Here is the list of notifications"', () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).equal(true);
  });

});