import React from 'react';
import {shallow, mount} from 'enzyme';
import AccommodationSubmit from './accommodation-submit';
import Done from 'universal/icons/done';
import Close from 'universal/icons/close';
import {
  SubmitButton,
} from './accommodations-styled';

describe('Accommodation Submit', () => {
  const props = {
    submitting: false,
    label: 'Submit',
    type: 'submit',
    invalid: false,
  };

  it('should render', () => {
    const expected = 1;
    const wrapper = shallow(<AccommodationSubmit {...props} />);

    expect(wrapper).toHaveLength(expected);
  });

  it('should have props', () => {
    const expected = {
      ...props,
    };
    const wrapper = mount(<AccommodationSubmit {...props} />);

    expect(wrapper.props()).toEqual(expected);
  });

  it('should render label', () => {
    const wrapper = mount(<AccommodationSubmit {...props} />);
    const actual = wrapper.find(SubmitButton).text();
    const expected = props.label;

    expect(actual).toEqual(expected);
  });

  it('should handle invalid state', () => {
    const testProps = {
      ...props,
      invalid: true,
    };
    const wrapper = mount(<AccommodationSubmit {...testProps} />);
    const actual = wrapper.find(SubmitButton).prop('disabled');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should render Close icon', () => {
    const testProps = {
      ...props,
      invalid: true,
    };
    const wrapper = mount(<AccommodationSubmit {...testProps} />);
    const actual = wrapper.find(Close);
    const expected = 1;

    expect(actual).toHaveLength(expected);
  });

  it('should render Done icon', () => {
    const testProps = {
      ...props,
      invalid: false,
      submitting: true,
    };
    const wrapper = mount(<AccommodationSubmit {...testProps} />);
    const actual = wrapper.find(Done);
    const expected = 1;

    expect(actual).toHaveLength(expected);
  });
});
