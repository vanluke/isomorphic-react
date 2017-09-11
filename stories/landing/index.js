import React from 'react';
import Landing from '../../src/universal/landing';
import {BrowserRouter} from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Landing', module)
  .add('landing page', () => (
    <BrowserRouter><Landing /></BrowserRouter>
  ));
