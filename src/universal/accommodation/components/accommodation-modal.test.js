import React from 'react';
import {shallow, mount} from 'enzyme';
import TestContainer from 'universal/utils/helpers-test';
import {Close} from 'universal/components/close';
import AccommodationModal from './accommodation-modal';
import {
  ModalTitle,
} from './accommodation-modal.styled';
import AccommodationForm from './accommodation-redux-form';

describe('Accommodation Create Modal', () => {
  // const ReduxForm = reduxForm({ form: 'accommodation-form-test' })(Form);
  const props = {
    addAccommodation: jest.fn(),
    onSubmit: jest.fn(),
  };

  it('should render', () => {
    const expected = 1;
    const wrapper = shallow(<AccommodationModal {...props} />);

    expect(wrapper).toHaveLength(expected);
  });

  it('should header', () => {
    const wrapper = mount(<TestContainer>
      <AccommodationModal {...props} />
    </TestContainer>).find(ModalTitle);
    const actual = wrapper.text();
    const expected = 'Create Accommodation';

    expect(actual).toEqual(expected);
  });

  it('should handle close', () => {
    const modalProps = {
      addAccommodation: jest.fn(),
      onSubmit: jest.fn(),
    };
    const wrapper = mount(<TestContainer>
      <AccommodationModal {...modalProps} />
    </TestContainer>).find(Close);

    wrapper.simulate('click');

    expect(modalProps.addAccommodation).toHaveBeenCalled();
  });

  it('should render form', () => {
    const modalProps = {
      addAccommodation: jest.fn(),
      onSubmit: jest.fn(),
    };
    const expected = 1;
    const wrapper = mount(<TestContainer>
      <AccommodationModal {...modalProps} />
    </TestContainer>).find(AccommodationForm);

    expect(wrapper).toHaveLength(expected);
  });
});
