import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  
  body.active {
    overflow-y: hidden;
}
`;

export default GlobalStyle;
