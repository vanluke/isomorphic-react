import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {red, white, dark, green} from 'universal/styles/palette';
import {NavLink as RouterLink} from 'react-router-dom';

const activeBorder = `.18rem solid ${green}`;

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

export const Link = props => (<NavLink
  {...props}
  activeStyle={{
    fontWeight: 'bold',
    borderBottom: activeBorder,
  }}
>
  {props.children}
</NavLink>);

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
