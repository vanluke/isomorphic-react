import React from 'react';
import { shallow } from 'enzyme';
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
    type: 'text',
    label: 'Name'
  };

  it('should render', () => {
    const expected = 1;
    const wrapper = shallow(<Field {...props} />);

    expect(wrapper).toHaveLength(1);
  });
});
