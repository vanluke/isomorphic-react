import React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'universal/components/link';
import {Navigation} from './nav';

describe('Navigation', () => {
  it('should render', () => {
    const wrapper = shallow(<Navigation />);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should render Link', () => {
    const wrapper = shallow(<Navigation />);
    const actual = wrapper.find(Link);

    expect(actual).toHaveLength(3);
  });
});
