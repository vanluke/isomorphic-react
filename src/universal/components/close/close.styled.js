import styled from 'styled-components';

export const Close = styled.button`
  position: relative;
  border: none;
  background: transparent;
  height: 30px;
  width: 30px;
  margin-right: 30px;

  &::before,
  &::after {
    content: '';
    border-style: solid;
    border-color: #ccc;
    border-width: 0 3px 3px 0;
    height: 30px;
    width: 30px;
    position: absolute;
    top: -10px;
    transform: rotate(45deg);
  }

  &::after {
    border-width: 3px 0 0 3px;
    top: 38px;
  }

  &::before {
    border-width: 0 3px 3px 0;
    top: -5px;
  }
`;
