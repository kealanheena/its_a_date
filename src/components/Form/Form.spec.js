import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './Form';
describe('Form', () => {
  let wrapper;
  let props;

  beforeEach(() =>  {
    props = {
      cuisine: ['Chinese', 'Japanese', 'Taiwanese'],
      setCuisines: jest.fn()
    };
    wrapper = shallow(<Form {...props} />)
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render 2 select tags', () => {
    expect(wrapper.find('select').length).toEqual(2);
  });

  it('should render 6 option tags', () => {
    expect(wrapper.find('option').length).toEqual(6);
  });

  it('should render submit button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should call setCuisines function when clicked on submit button', () => {
    wrapper
      .find('button')
      .at(0)
      .simulate('click')

    expect(props.setCuisines).toHaveBeenCalled();
  })
});
