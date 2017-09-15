import React from 'react';
import {renderRoutes} from 'react-router-config';
import {routes} from 'universal/routes';
import {Landing} from 'universal';

export default () => (<Landing>
  {renderRoutes(routes)}
</Landing>);
