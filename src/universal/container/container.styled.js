import styled, {injectGlobal} from 'styled-components';
import font from 'assets/PT_Sans-Web-Regular.ttf';
/* eslint-disable */
injectGlobal`
  @font-face {
    font-family: PtSans;
    src: url('${font}') format('truetype');
  }

  body {
    font-family: PtSans;
    margin: 0;
    padding: 0;
  }
`;
/* eslint-enable */

export const Container = styled.main`
  padding: 0;
  margin: 0;
  font-size: medium;
  position: relative;
`;
