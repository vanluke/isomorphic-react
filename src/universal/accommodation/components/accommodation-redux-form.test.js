import React from 'react';
import {shallow} from 'enzyme';
import AccommodationForm from './accommodation-redux-form';

describe('Accommodation Redux Form', () => {
  it('should render', () => {
    const expected = 1;
    const wrapper = shallow(<AccommodationForm />);

    expect(wrapper).toHaveLength(expected);
  });
});
