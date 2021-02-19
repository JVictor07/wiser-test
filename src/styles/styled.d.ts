/* eslint @typescript-eslint/no-empty-interface: "off" */

// Define types for my theme.js.
// With this, the VSCode suggest the properties automatically

import theme from './theme';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
