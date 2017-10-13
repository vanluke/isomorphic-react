import React from 'react';
import styled from 'styled-components';
import {
  white,
  black,
} from 'universal/styles/palette';
import Close from './close';

const CloseIcon = styled(({white, ...props}) =>
  <Close {...props} />)`
    fill: ${props => (props.white ? white : black)};
  `;

export default CloseIcon;
