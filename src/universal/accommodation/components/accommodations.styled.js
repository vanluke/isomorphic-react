import styled from 'styled-components';
import {
  Spinning,
  media,
  boxShadow,
  transition,
  shadowColor,
  shadowHoverColor,
} from 'universal/utils/styles';
import {
  white,
  red,
  gray,
  darkGray,
  accent,
  green,
  blue,
} from 'universal/styles/palette';

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  ${media.mobile`  
    grid-template-columns: 1fr 1fr;
  `}
  ${media.desktop`  
    grid-template-columns: 1fr 1fr 1fr;
  `}
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
  ${boxShadow('1px', '1px', '2px', '2px')};

  &:hover {
    &${Thumbnail} {
      img {
        transform: scale(1.1);
        opacity: .6;
      }
    }

    ${boxShadow(0, '1px', '35px', 0, shadowHoverColor)};
  }
`;

export const Content = styled.article`
  position: relative;
  bottom: 0;
  background: ${white};
  width: 100%;
  box-sizing: border-box;
  ${transition('all', '.3s', 'cubic-bezier(.37, .75, .61, 1.05)')};
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
  color: ${darkGray};
`;

export const Price = styled.span`
  margin: 0 16px 0 0;
`;

export const Address = styled.div`
  display: inline;
  font-size: 10px;
`;

export const AddAccommodation = styled.button`
  color: ${white};
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  border-radius: 4px;
  background-color: #d35400;
  border: none;
  width: 150px;
  margin: 0 auto 5%;
  height: 50px;
  transition: all .5s;

  &:hover {
    span {
      padding-right: 25px;

      &::after {
        opacity: 1;
        right: 0;
      }
    }
  }

  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: .5s;

    &::after {
      content: '»';
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: .5s;
    }
  }
`;

export const Section = styled.section`
  position: relative;
`;

export const Layout = styled.section`
  margin: 5% 1% 0;
  display: grid;
  grid-template-columns: 100%;
  ${media.desktop`  
    grid-template-columns: 20% 80%;
  `}
`;
