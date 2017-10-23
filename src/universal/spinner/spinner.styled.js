import styled, {keyframes} from 'styled-components';

export const lineAnimation = keyframes`
  0% {
      transform: rotate(0deg) ;
  }
  100% {
      transform: rotate(360deg) ;
  }
`;

export const Line = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  border: 2px solid transparent;
  border-bottom-color: ${props => props.color};
  position: ${props => props.position};
  left: ${props => props.left};
  top: ${props => props.top};
  border-radius: 100%;
  animation-name: ${lineAnimation};
  animation-duration: ${props => props.duration};
  animation-iteration-count: infinite;
`;

export const Container = styled.section`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
