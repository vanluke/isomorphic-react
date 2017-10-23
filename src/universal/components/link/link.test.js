import React from 'react';
import {shallow} from 'enzyme';
import {Link} from './link';

describe('Link', () => {
  it('should render', () => {
    const wrapper = shallow(<Link>
      <span>Text Link</span>
    </Link>);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});