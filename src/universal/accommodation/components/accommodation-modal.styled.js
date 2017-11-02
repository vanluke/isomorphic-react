import styled from 'styled-components';
import {
  media,
  shadowColor,
} from 'universal/utils/styles';
import {
  darkGray,
} from 'universal/styles/palette'

export const ModalHeader = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${shadowColor};
`;

export const ModalTitle = styled.h1`
  font-size: 24px;
  flex-grow: 1;
  text-align: center;
  flex-basis: auto;
  line-height: 15px;
  color: ${darkGray};
`;

export const Modal = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  overflow: scroll;
  ${media.mobile` 
    overflow: auto;
  `}
`;