/* eslint @typescript-eslint/no-empty-interface: "off" */
import theme from './theme';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
