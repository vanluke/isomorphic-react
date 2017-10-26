import styled from 'styled-components';
import {red, white, dark} from 'universal/styles/palette';
import {NavLink as RouterLink} from 'react-router-dom';

export const NavLink = styled(RouterLink)`
  font-size: 100%;
  text-decoration: none;
  color: ${props => (props['data-dark'] ? dark : white)};

  &:active {
    background: ${red};
    color: ${white};
  }

  &:hover {
    color: ${red};
  }
`;