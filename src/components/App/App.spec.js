import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from '../Form/Form';
import App from './App';

describe('Shallow App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Form Component', () => {
    expect(wrapper.containsMatchingElement(<Form/>)).toEqual(true);
  });

});

describe('Mounted App', () => {
  let wrapper;

  beforeEach(() => wrapper = mount(<App/>));

  it('should have default state as Chinese for person one and two', () => {
    expect(wrapper.state('personOneChoice')).toEqual('Chinese')
    expect(wrapper.state('personTwoChoice')).toEqual('Chinese')
  });

  it('should change the state when options is change', () => {
    wrapper.find('#person_one').simulate('change', { target: { value: 'Japanese' } })
    expect(wrapper.state('personOneChoice')).toEqual('Japanese')
  });

  it('should change the state when options is change', () => {
    wrapper.find('#person_two').simulate('change', { target: { value: 'Taiwanese' } })
    expect(wrapper.state('personTwoChoice')).toEqual('Taiwanese')
  });

});
