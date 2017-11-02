import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import {BrowserRouter} from 'react-router-dom';
import routes from 'universal/routes';
import store from 'universal/store';
import * as bundles from '../bundles';

const splitPoints = window.splitPoints || [];
const mountNode = document.getElementById('app');

const getProperty = (chunk, obj = {}) => {
  const key = Object.keys(obj).find(e => e.toLowerCase() === chunk.toLowerCase());
  return obj[key] || {};
};

Promise.all(splitPoints.map(chunk => getProperty(chunk, bundles).load()))
  .then(() => render(<BrowserRouter>
    <Provider store={store}>
      {renderRoutes(routes)}
    </Provider>
  </BrowserRouter>, mountNode));
