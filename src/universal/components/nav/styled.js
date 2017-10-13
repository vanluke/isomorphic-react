import styled from 'styled-components';
import {green, grey, darkGrey} from 'universal/styles/palette';

export const Nav = styled.nav`
  position: relative;
  display: block;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0;
  top: 0;
  background: ${darkGrey};
`;

const activeBorder = `.18rem solid ${green}`;

export const List = styled.ul`
  display: inline-block;
  width: 100%;
  padding: 0;
  list-style: none;
  text-align: center;
`;

export const Li = styled.li`
    text-align: center;
    display: block;
    padding: 10px;
    height: 3.125rem;
    color: ${grey};
    transition: all .2s ease-in;
    border-bottom: ${props => (props.active ? activeBorder : 0)};
    color: ${props => (props.active ? green : grey)};

    @media screen and (min-width: 40rem) {
      display: inline-block;
    }
`;
