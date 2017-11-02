import React from 'react';
import PropTypes from 'prop-types';
import {renderRoutes} from 'react-router-config';
import Landing from 'universal/landing';

const Root = ({route: {routes}}) => (<Landing>
  {renderRoutes(routes)}
</Landing>);

Root.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
    })),
  }).isRequired,
};

export default Root;
