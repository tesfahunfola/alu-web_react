// Test wether the App component renders without crashing

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('Testing the App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it ('renders App without crashing', () => {
    expect(wrapper.exists()).equal(true);
  });

  it ('renders a div with the class App', () => {
    expect(wrapper.find('.App')).to.have.lengthOf(1);
  });

  it ('renders a header with the class App-header', () => {
    expect(wrapper.find('.App-header')).to.have.lengthOf(1);
  });

  it ('renders a body with the class App-body', () => {
    expect(wrapper.find('.App-body')).to.have.lengthOf(1);
  });

  it ('renders a footer with the class App-footer', () => {
    expect(wrapper.find('.App-footer')).to.have.lengthOf(1);
  });

});