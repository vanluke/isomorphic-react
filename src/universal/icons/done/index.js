import React from 'react';
import styled from 'styled-components';
import {
  white as w,
  black,
} from 'universal/styles/palette';
import Done from './done';

const CloseIcon = styled(({white, ...props}) =>
  <Done {...props} />)`
  fill: ${props => (props.white ? w : black)};
`;

export default CloseIcon;
