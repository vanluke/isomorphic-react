import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'universal/components/link';
import {Nav, List, Li} from './styled';

export const Navigation = ({location}) => (<Nav>
  <List>
    <Li>
      <Link to="/home">Home</Link>
    </Li>
    <Li>
      <Link to="/test">Test</Link>
    </Li>
    <Li>
      <Link to="/accommodations">Accommodations</Link>
    </Li>
  </List>
</Nav>);

Navigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Navigation;
