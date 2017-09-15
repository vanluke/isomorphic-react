import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import {storiesOf} from '@storybook/react';
import {Link} from './link';


storiesOf('Link', module)
  .add('default', () => (
    <BrowserRouter><div style={{background: 'grey'}}><Link to="#">click here</Link></div></BrowserRouter>
  ));
