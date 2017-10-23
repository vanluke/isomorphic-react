import React from 'react';
import {shallow, mount} from 'enzyme';
import Field from './accommodation-form-field';

describe('Accommodation From Field', () => {
  const props = {
    meta: {
      touched: false,
      error: '',
    },
    input: {
      name: 'name',
    },
    label: 'label',
    type: 'text',
  };

  it('should render', () => {
    const expected = 1;
    const wrapper = shallow(<Field {...props} />);

    expect(wrapper).toHaveLength(expected);
  });

  it('should have props defined', () => {
    const expected = {
      ...props,
      large: false,
    };
    const wrapper = mount(<Field {...props} />);

    expect(wrapper.props()).toEqual(expected);
  });
});
