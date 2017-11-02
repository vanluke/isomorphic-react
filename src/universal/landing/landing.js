import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import {Nav} from 'universal/components/nav';
import {Container} from '../container';

const Landing = ({children, location}) => (<Container>
  <Nav location={location} />
  {children}
</Container>);

Landing.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Landing.defaultProps = {
  children: undefined,
  location: {},
};

export default withRouter(Landing);
