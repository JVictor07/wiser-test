import { css } from 'styled-components';

export const breakpoint = {
  medium: '768px',
  large: '1366px',
};

export const media = {
  medium: (...styles) => css`
    @media screen and (min-width: ${breakpoint.medium}) {
      ${css(...styles)}
    }
  `,
  onlyMedium: (...styles) => css`
    @media screen and (min-width: ${breakpoint.medium}) and (max-width: ${breakpoint.large}) {
      ${css(...styles)}
    }
  `,
  large: (...styles) => css`
    @media screen and (min-width: ${breakpoint.large}) {
      ${css(...styles)}
    }
  `,
};
