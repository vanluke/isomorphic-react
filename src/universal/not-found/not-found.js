import React from 'react';
import {Route} from 'react-router-dom';

const NotFound = () => (
  <Route render={() => (
    <div>
      <h1>404 : Not Found</h1>
    </div>
  )} 
  />);

export default NotFound;
