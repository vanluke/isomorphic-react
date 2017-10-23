import React from 'react';
import PropTypes from 'prop-types';
import {green} from 'universal/styles/palette';
import {NavLink} from './link.styled';

const activeBorder = `.18rem solid ${green}`;

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
