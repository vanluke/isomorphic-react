import React from 'react';
import {storiesOf} from '@storybook/react';
import HomeComponent from './home';

storiesOf('Home', module)
  .add('default', () => (
    <HomeComponent />
  ));
