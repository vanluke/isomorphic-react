import {css, keyframes} from 'styled-components';

export const mobileBreakpoint = '40rem';
export const tabletBreakpoint = '768px';
export const desktopBreakpoint = '1224px';

export const shadowColor = 'rgba(0, 0, 0, .2)';
export const shadowHoverColor = 'rgba(0, 0, 0, .9)';

export const Spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`;

export const media = {
  mobile: (...args) => css`
    @media (min-width: ${mobileBreakpoint}) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${tabletBreakpoint}) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${desktopBreakpoint}) {
      ${css(...args)}
    }
  `,
};

export function boxShadow(
  h = '0',
  v = '1px',
  blur = '2px',
  spread = '0',
  color = shadowColor) {
  return `box-shadow: ${h} ${v} ${blur} ${spread} ${color}`;
}

export function transition(property = 'all', duration = '.3s', timing = 'linear', delay = '0s') {
  return `transition: ${property} ${duration} ${timing} ${delay};`;
}
