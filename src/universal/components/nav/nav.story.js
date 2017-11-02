import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {storiesOf} from '@storybook/react';
import {Navigation} from './nav';

storiesOf('Navigation', module)
  .add('default', () => (
    <BrowserRouter><Navigation location={window.location} /></BrowserRouter>
  ));
