import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Form/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
