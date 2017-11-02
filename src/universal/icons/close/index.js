import React from 'react';
import styled from 'styled-components';
import {
  white as w,
  black,
} from 'universal/styles/palette';
import Close from './close';

const CloseIcon = styled(({white, ...props}) =>
  <Close {...props} />)`
    fill: ${props => (props.white ? w : black)};
  `;

export default CloseIcon;
