import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import {required, minLength, isNumber, isLink} from 'universal/common/redux-form-utils';
import Submit from './accommodation-submit';
import {
  Form,
} from './accommodations-styled';
import FormField from './accommodation-form-field';

const minLength5 = minLength(5);

const AccommodationForm = ({
  error,
  handleSubmit,
  submitting,
  invalid,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="title"
        type="text"
        component={FormField}
        label="Title"
        validate={[required, minLength5]}
      />
      <Field
        name="picture"
        type="url"
        component={FormField}
        label="Picture Url"
        validate={[required, isLink]}
      />
      <Field
        name="name"
        type="text"
        component={FormField}
        label="Name"
        validate={[required, minLength5]}
      />
      <Field
        name="balance"
        type="text"
        component={FormField}
        label="Balance"
        validate={[required, isNumber]}
      />
      <Field
        name="about"
        type="text"
        large
        component={FormField}
        label="About"
      />
      <Submit
        type="Submit"
        label="Submit"
        error={error}
        invalid={invalid}
        submitting={submitting}
      />
    </Form>);
}

AccommodationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

AccommodationForm.defaultProps = {
  error: '',
};

export default AccommodationForm;