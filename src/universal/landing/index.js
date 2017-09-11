import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import {Container} from '../container/container';
import {Link} from 'universal/components/link';
import {Nav} from 'universal/components/nav';
import {Li, List} from 'universal/components/nav-list';
import 'font-awesome/scss/font-awesome.scss';

export const Landing = ({children, location}) => (<Container>
  <h3>Landing</h3>
  <p>page description</p>
  <Nav>
    <List >
      <Li active={location.pathname === '/home' || location.pathname === '/'}>
        <Link to="/home" dark>Home</Link>
      </Li>
      <Li active={location.pathname === '/test'}>
        <Link to="/test" dark>Test</Link>
      </Li>
    </List>
  </Nav>
  {children}
</Container>);

export default withRouter(Landing);
