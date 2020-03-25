import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
describe('Form', () => {
  let wrapper;
  beforeEach(() =>  wrapper = shallow(<Form
    cuisine={['Chinese', 'Japanese', 'Taiwanese']}
  />));
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should render 2 select tags', () => {
    expect(wrapper.find('select').length).toEqual(2)
  })
  it('should render 6 option tags', () => {
    expect(wrapper.find('option').length).toEqual(6)
  })
  it('should render submit button', () => {
    expect(wrapper.find('button').length).toEqual(1)
  })
});