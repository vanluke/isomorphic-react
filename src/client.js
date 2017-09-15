import React from 'react';
import {render} from 'react-dom';
import Root from 'universal/root';
import {BrowserRouter} from 'react-router-dom';
import * as bundles from './bundles';

const splitPoints = window.splitPoints || [];
const mountNode = document.getElementById('app');

const getProperty = (chunk, obj = {}) => {
  const key = Object.keys(obj).find(e => e.toLowerCase() === chunk.toLowerCase());
  return obj[key] || {};
};

Promise.all(splitPoints.map(chunk => getProperty(chunk, bundles).load()))
  .then(() => render(<BrowserRouter>
    <Root />
  </BrowserRouter>, mountNode));
