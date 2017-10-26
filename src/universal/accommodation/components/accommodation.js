import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Thumbnail,
  Content,
  Title,
  Subtitle,
  Description,
  Meta,
  Price,
} from './accommodations.styled';

const Accommodation = ({
  name,
  picture,
  about,
  balance,
  title,
}) => (<Card>
  <Thumbnail>
    <img src={picture} alt="pic" />
  </Thumbnail>
  <Content>
    <Title>{name}</Title>
    <Subtitle>{title}</Subtitle>
    <Description>
      {about}
    </Description>
  </Content>
  <Meta>
    <Price>Cost: {balance}</Price>
  </Meta>
</Card>);

Accommodation.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Accommodation;
