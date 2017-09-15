import React from 'react';
import {Line, Container} from './styled';

export const Spinner = () => (
  <Container>
    <Line size="100px" color="#ff0000" top="5px" left="2px" duration="7s" position="relative">
      <Line size="90px" color="#39aee5" top="5px" left="2px" duration="2s" position="absolute">
        <Line size="80px" color="#ffcc00" top="5px" left="2px" duration="5s" position="absolute">
          <Line
            size="70px"
            color="#31db0a"
            top="5px"
            left="2px"
            duration="7s"
            position="absolute"
          />
        </Line>
      </Line>
    </Line>
  </Container>
);
