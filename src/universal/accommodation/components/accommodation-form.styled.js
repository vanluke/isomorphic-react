import styled from 'styled-components';
import {
  white,
  red,
  gray,
  darkGray,
  accent,
  green,
  blue,
} from 'universal/styles/palette';

export const Label = styled.label`
  position: absolute;
  top: 30px;
  left: 0;
  color: ${blue};
  font-weight: 300;
  transition: transform .2s ease, color .2s ease;
  z-index: -1;

  &:hover {
    cursor: text;
  }
`;

export const Input = styled.input`
  border: 0;
  border-bottom: solid 1px ${gray};
  width: 100%;
  padding: 10px 0;
  background: transparent;
  transition: border-color .2s ease, box-shadow .2s ease;
  min-height: ${props => (props.large ? '20%' : 'auto')};

  &:focus {
    outline: none;
    border-color: ${green};
    box-shadow: 0 1px 0 0 ${green};
  }

  &:focus + ${Label} {
    color: ${green};
    transform: translateY(-30px);
  }

  &:not([value=""]):not(:focus) + ${Label} {
    transform: translateY(-30px);
  }
`;

export const InputGroup = styled.section`
  position: relative;
  padding-top: 20px;
  margin-top: 20px;
`;

export const Form = styled.form`
  padding: 5rem;
`;

export const Error = styled.span`
  color: ${red};
  font-size: .7rem;
`;