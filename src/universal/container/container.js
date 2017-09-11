import styled, {injectGlobal} from 'styled-components';
import React from 'react';
import font from 'assets/PT_Sans-Web-Regular.ttf';

injectGlobal`
  @font-face {
    font-family: PtSans;
    src: url('${font}') format('truetype');
  }

  body {
    font-family: PtSans;
  }
`

export const Container = styled.main`
	padding: 0;
  margin: 0;
  font-size: medium;
  position: relative;
`;
