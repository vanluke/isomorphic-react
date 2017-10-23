import React from 'react';
import {shallow} from 'enzyme';
import Accommodations from './accommodations';
import Accommodation from './accommodation';
import AccommodationModal from './accommodation-modal';
import {
  AddAccommodation,
} from './accommodations-styled';

describe('Accommodations', () => {
  const props = {
    isLoading: false,
    accommodations: [{
      guid: '123',
      name: 'name',
      picture: 'pincture.png',
      about: 'about',
      balance: '$123',
      title: 'title',
    }],
    createAccommodation: jest.fn(),
    addAccommodation: jest.fn(),
    openCreateModal: false,
  };

  it('should render', () => {
    const expected = 1;
    const wrapper = shallow(<Accommodations {...props} />);

    expect(wrapper).toHaveLength(expected);
  });

  it('should handle add accommodation', () => {
    const expected = 1;
    const wrapper = shallow(<Accommodations {...props} />);

    wrapper.find(AddAccommodation).simulate('click');

    expect(props.addAccommodation).toHaveBeenCalledTimes(expected);
  });

  it('should render Accommodations', () => {
    const expected = 1;
    const wrapper = shallow(<Accommodations {...props} />);
    const actual = wrapper.find(Accommodation);

    expect(actual).toHaveLength(expected);
  });

  it('should render Modal', () => {
    const renderModalProps = {
      ...props,
      openCreateModal: true,
    };
    const wrapper = shallow(<Accommodations {...renderModalProps} />);
    const actual = wrapper.find(AccommodationModal);
    const expected = 1;

    expect(actual).toHaveLength(expected);
  });
});
