import React from 'react';
import {Link} from 'universal/components/link';
import {Nav, List, Li} from './nav.styled';

export const Navigation = () => (<Nav>
  <List>
    <Li>
      <Link to="/home">Home</Link>
    </Li>
    <Li>
      <Link to="/about">About</Link>
    </Li>
    <Li>
      <Link to="/accommodations">Accommodations</Link>
    </Li>
  </List>
</Nav>);

export default Navigation;
