import React from 'react';
import {shallow} from 'enzyme';
import Home from './home';

describe('Home', () => {
  it('should render', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
