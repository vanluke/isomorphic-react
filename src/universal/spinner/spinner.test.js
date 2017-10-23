import React from 'react';
import {shallow} from 'enzyme';
import {Spinner} from './spinner';

describe('Spinner', () => {
  it('should render', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});