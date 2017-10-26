import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  InputGroup,
  Label,
  Error,
} from './accommodations.styled';

const Field = ({input, label, type, large, meta: {touched, error}}) => (
  <InputGroup>
    <Input {...input} type={type} large={large} />
    <Label>{label}</Label>
    {touched && error && <Error>{error}</Error>}
  </InputGroup>
);

Field.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  large: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

Field.defaultProps = {
  type: 'text',
  large: false,
};

export default Field;
