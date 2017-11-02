import React from 'react';
import {shallow, mount} from 'enzyme';
import {reduxForm} from 'redux-form';
import TestContainer from 'universal/utils/helpers-test';
import Submit from './accommodation-submit';
import Form from './accommodation-form';

describe('Accommodation From', () => {
  const ReduxForm = reduxForm({form: 'accommodation-form-test'})(Form);
  const props = {
    onSubmit: jest.fn(),
    error: '',
    invalid: false,
    submitting: false,
    meta: {
      touched: true,
    },
    label: 'label',
    input: {},
    type: 'text',
    large: false,
  };

  it('should render', () => {
    const expected = 1;
    const wrapper = shallow(<TestContainer>
      <ReduxForm {...props} />
    </TestContainer>).find(ReduxForm);

    expect(wrapper).toHaveLength(expected);
  });

  it('should have props defined', () => {
    const expected = {
      ...props,
    };
    const wrapper = mount(<TestContainer>
      <ReduxForm {...props} />
    </TestContainer>).find(ReduxForm);

    expect(wrapper.props()).toEqual(expected);
  });

  it('should submit handle click', () => {
    const wrapper = mount(<TestContainer>
      <ReduxForm {...props} />
    </TestContainer>);
    wrapper.find(Form).find(Submit).find('button')
      .simulate('submit');

    expect(props.onSubmit)
      .toHaveBeenCalledTimes(1);
  });
});
