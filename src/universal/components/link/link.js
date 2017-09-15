// import React from 'react';
import styled from 'styled-components';
import {red, white, dark} from 'universal/styles/palette';
import {Link as RouterLink} from 'react-router-dom';

export const Link = styled(RouterLink)`
  font-size: 120%;
  color: ${props => (props['data-dark'] ? dark : white)};
  &:active {
    background: ${red};
    color: ${white};
  }
`;
