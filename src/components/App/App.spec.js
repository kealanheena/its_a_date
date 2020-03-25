import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from '../Form/Form';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Form Component', () => {
    expect(wrapper.containsMatchingElement(<Form/>)).toEqual(true);
  });
});

// describe('Mounted App', () => {
//   let wrapper;

//   beforeEach(() => wrapper = mount(<App
//   cuisine: />));

//   it('should setstateafter clicking', () => {
//     const spy = jest.spyOn(wrapper.instance(), 'clickButton');
//     // document.getElementById('person_one').value = "Chinese"
//     // document.getElementById('person_two').value = "Japanese"
//     const button = wrapper.find("[data-test='submit_button']")
//     console.log(button)
//     // const mockedEvent = { target: { value: 'Comedy' } };
//     button.find('button').simulate('click');
//     // button.find('button').simulate('click');
//     // expect(spy).toHaveBeenCalledTimes(1)
//     expect(wrapper.state('selectedCuisine')).toEqual(['Chinese', 'Chinese'])
//   })

// })
