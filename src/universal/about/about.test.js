import React from 'react';
import {shallow} from 'enzyme';
import About from './about';

describe('About', () => {
  it('should render', () => {
    const wrapper = shallow(<About />);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
