import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import * as bundles from './bundles';
import {routes} from './universal/routes';

const splitPoints = window.splitPoints || [];
const mountNode = document.getElementById('app');

Promise.all(splitPoints.map(chunk => bundles[chunk].loadComponent()))
  .then(() => render(<BrowserRouter>
    <bundles.Landing>
      {renderRoutes(routes)}
    </bundles.Landing>
  </BrowserRouter>, mountNode));
