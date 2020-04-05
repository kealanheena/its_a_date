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

  it('should change the state when options is change', () => {
    wrapper.find('#person_one').simulate('change', { target: { value: 'Japanese' } })
    expect(wrapper.state('personOneChoice')).toEqual('Japanese')
  });
  it('should change the state when options is change', () => {
    wrapper.find('#person_two').simulate('change', { target: { value: 'Taiwanese' } })
    expect(wrapper.state('personTwoChoice')).toEqual('Taiwanese')
  });
})

// describe('Mounted App', () => {
//   let wrapper;

//   beforeEach(() => wrapper = mount(
//   <App
//     cuisine={['chinese']}
//     selectedCuisine={[]}
//   />
//   ));

//   it('should setstateafter clicking', () => {
//     console.log('+=======+');
//     console.log(wrapper.find(".submit-button"));
//     console.log(wrapper.state('selectedCuisine'));
//     console.log(document.getElementById('person_one').value);
//     console.log('+=======+');
    
//     // const spy = jest.spyOn(wrapper.instance(), 'setCusines');
//     wrapper.instance().setCuisines()
//     // document.getElementById('person_one').value = "Chinese"
//     // document.getElementById('person_two').value = "Japanese"
//     // console.log(document.getElementById('person_one').value);
//     // const mockedEvent = { target: { value: 'Comedy' } };
//     wrapper.find(".submit-button").first().simulate('click');
//     // button.find('button').simulate('click');
//     // expect(spy).toHaveBeenCalledTimes(1) 
//     expect(wrapper.state('selectedCuisine')).toEqual(['Chinese', 'Chinese'])
//   })

// })
