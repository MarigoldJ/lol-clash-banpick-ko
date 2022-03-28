import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  blue: "rgb(50, 50, 250)",
  red: "rgb(250, 50, 50)",
};

export const darkTheme = {
  fontColor: "lightgray",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  input {
    all: unset;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme.bgColor};
    font-size: 14px;
    color: ${(props) => props.theme.fontColor};
  }
`;
