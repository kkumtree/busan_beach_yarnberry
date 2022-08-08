import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    line-height: 1.6;
    font-weight: 400;
  }
`;
export default GlobalStyle;
