import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font: 400 16px 'Montserrat', sans-serif;
    color: ${props => props.theme.colors.darkPurple};
    &::-webkit-scrollbar {
        width: 0.5em;
        border-radius: 5px;
      }

      &::-webkit-scrollbar-track {
        border-radius: 5px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: ${props => props.theme.colors.darkPurple};
      }

    input {
      border: none;
      outline: none;
    }
    button {
      border: none;
      outline: none;
      cursor: pointer;
      background: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
`;
