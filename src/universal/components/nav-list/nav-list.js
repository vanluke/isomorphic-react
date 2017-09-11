import styled from 'styled-components';
import {green, grey, darkGrey} from 'universal/styles/palette';

const activeBorder = `.18rem solid ${green}`;

export const List = styled.ul`
  background: white;
  list-style: none;
  display: flex;
  background: ${darkGrey};
  justify-content: space-around;
  font-size: 1.15rem;

`;

export const Li = styled.li`
    flex-grow: 1;
    text-align: center;
    height: 3.125rem;
    line-height: 4.375rem;
    color: ${grey};
    transition: all .2s ease-in;
    border-bottom: ${props => props.active ? activeBorder : 0};
    color: ${props => props.active ? green : grey};
    &:hover {
      color: #21D8A2;
    }
`;
