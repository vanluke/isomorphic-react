import React from 'react';
import Home from '../../src/universal/home';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Home', module)
  .add('home page', () => (
    <Home />
  ));
