import React from 'react';
import PropTypes from 'prop-types';
import Done from 'universal/icons/done';
import Close from 'universal/icons/close';
import {
  SubmitButton,
  SubmitGroup,
} from './accommodations-styled';

const Submit = ({ submitting, label, type, invalid}) => (
  <SubmitGroup>
    <SubmitButton
      type={type}
      disabled={invalid}
      validate={submitting && !invalid}
    >
      {submitting && invalid && (<Close white />)}
      {submitting && !invalid && (<Done white />)}
      {!submitting && invalid && (<Close white />)}
      {!submitting && !invalid && (<span>{label}</span>)}
    </SubmitButton>
  </SubmitGroup>
);

Submit.propTypes = {
  submitting: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  invalid: PropTypes.bool.isRequired,
};

Submit.defaultProps = {
  type: undefined,
  error: undefined,
};

export default Submit;