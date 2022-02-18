import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  input {
    all: unset;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    letter-spacing: -0.5px;
    touch-action: pan-y;
    -webkit-font-smoothing: antialiased;
    background-color: black;
  }
`;

export default GlobalStyle;
