import styled, {keyframes} from 'styled-components';
import {
  white,
  lightGray,
  gray,
  darkGray,
  accent,
  green,
  blue,
} from 'universal/styles/palette';

const shadowColor = 'rgba(0, 0, 0, .2)';
const shadowHoverColor = 'rgba(0, 0, 0, .9)';

function boxShadow(
  h = '0',
  v = '1px', 
  blur = '2px',
  spread = '0',
  color = shadowColor) {
  return `box-shadow: ${h} ${v} ${blur} ${spread} ${color}`;
}

function transition(property = 'all', duration = '.3s', timing = 'linear', delay = '0s') {
  return `transition: ${property} ${duration} ${timing} ${delay}`;
}

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
`;

export const Thumbnail = styled.picture`
  display: block;
  height: 50%;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    ${transition()};
  }
`;

export const Card = styled.div`
  position: relative;
  padding: 4%;
  box-sizing: border-box;
  display: block;
  background: ${white};
  min-width: 270px;
  height: 470px;
  ${boxShadow()};
  &:hover {
    ${boxShadow(0, '1px', '35px', 0, shadowHoverColor)};
    ${Thumbnail} {
      img {
        transform: scale(1.1);
        opacity: .6;
      }
    }
  }
`;

export const Content = styled.article`
  position: relative;
  bottom: 0;
  background: ${white};
  width: 100%;
  box-sizing: border-box;
  ${transition('all', '.3s', 'cubic-bezier(.37, .75, .61, 1.05))')};
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0 0 10px;
  color: ${darkGray};
  font-size: 26px;
  font-weight: 700;
`;

export const Subtitle = styled.h2`
  margin: 0;
  padding: 0 0 20px;
  color: ${accent};
  font-size: 20px;
  font-weight: 400;
`;

export const Description = styled.p`
  display: none;
  color: ${gray};
  font-size: 14px;
  line-height: 1.8em;
`;

export const Meta = styled.div`
  bottom: 12px;
  position: absolute;
  color: ${lightGray};
`;

export const Price = styled.span`
  margin: 0 16px 0 0;
`;

export const Address = styled.div`
  display: inline;
  font-size: 10px;
`;

export const AddAccommodation = styled.button`
  color:#fff;
  text-align: center;
  cursor: pointer;
  font-size:24px;
  border-radius: 4px;
  background-color:#d35400;
  border: none;
  width: 150px;
  margin: 0 auto;
  height: 50px;
  transition: all 0.5s;
  &:hover { 
    span {
      padding-right: 25px;
      &:after {
        opacity: 1;
        right: 0;
      }
    }
  }
  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
    &:after {
      content: '»';
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }
  }
`;

export const Modal = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
`;

export const Section = styled.section`
`;

export const Layout = styled.section`
  margin: 5% 0 0 0;
  display: grid;
  grid-template-columns: 20% 80%;
`;

export const Close = styled.button`
  position: relative;
  border: none;
  background: transparent;
  height: 30px; 
  width: 30px;
  margin-right: 30px;

  &::before, &::after {
    content: '';
    border-style: solid;
    border-color: #ccc;
    border-width: 0px 3px 3px 0px;
    height: 30px; 
    width: 30px;
    position: absolute;
    top: -10px;
    transform: rotate(45deg);
  }

  &::after {
    border-width: 3px 0px 0px 3px;
    top: 38px;
  }

  &::before {
    border-width: 0px 3px 3px 0px;
    top: -5px;
  }
`;

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

const SubmitButtonAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`

export const SubmitButton = styled.button`
  height: 40px;
  text-align: center;
  width: ${props => (props.wait ? '40px' : '130px')};
  border-radius:40px;
  background: ${props => (props.disabled ? accent : white)};
  border-width: ${props => (props.wait ? '3px' : '2px')};
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
        animation: ${SubmitButtonAnimation} 2s 0.25s linear infinite;
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
  border-style: solid;
  ${props => (props.wait ? '' : `border-color: ${green}`)};
  color: ${green};
  letter-spacing:1px;
  text-shadow: 0;
  font-size: ${props => (props.wait ? '0' : '12px')};
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    color: ${white};
    background: ${green};
  }
  &:active {
    letter-spacing: 2px;
  }
 `;

 export const Label = styled.label`
  position: absolute;
	top: 30px;
	left: 0;
	color: ${blue};
	font-weight: 300;
	transition: transform .2s ease, color .2s ease;
  &:hover {
		cursor: text;
  }
 `;

 export const Input = styled.input`
  border: none;
	border-bottom: solid 1px ${gray};
	width: 100%;
	padding: 10px 0;
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
 `;

 export const InputGroup = styled.section`
  position: relative;
  padding-top: 20px;
  margin-top: 20px;
 `;

 export const SubmitGroup = styled.section`
  text-align: center;
  padding: 4rem;
 `;

 export const Form = styled.form`
  padding: 5rem;
 `;