import React from 'react';
import {shallow} from 'enzyme';
import Notfound from './not-found';

describe('Notfound', () => {
  it('should render', () => {
    const wrapper = shallow(<Notfound />);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
