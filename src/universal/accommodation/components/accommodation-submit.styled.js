
import styled from 'styled-components';
import {Spinning} from 'universal/utils/styles'
import {
  green,
  accent,
  white,
} from 'universal/styles/palette';

export const SubmitButton = styled.button`
  height: 40px;
  text-align: center;
  width: ${props => (props.wait ? '40px' : '130px')};
  border-radius: 40px;
  background: ${props => (props.disabled ? accent : white)};
  border-width: ${props => (props.wait ? '3px' : '2px')};
  border-style: solid;
  ${props => (props.wait ? '' : `border-color: ${green}`)};
  color: ${green};
  letter-spacing: 1px;
  text-shadow: 0;
  font-size: ${props => (props.wait ? '0' : '12px')};
  cursor: pointer;
  transition: all .25s ease;

  &:hover {
    color: ${white};
    background: ${green};
  }

  &:active {
    letter-spacing: 2px;
  }

  ${(props) => {
    if (props.validate) {
      return `
          font-size: 0;
          color: white;
          background: ${green};
        `;
    }
    if (props.wait) {
      return `
        border-left-color: ${green};
        animation: ${Spinning} 2s .25s linear infinite;

        &:after {
          content: '';
        }

        &:hover {
          color: ${green};
          background: white;
        }
      `;
    }
    return '';
  }};
`;

export const SubmitGroup = styled.section`
  text-align: center;
  padding: 4rem 0;
`;