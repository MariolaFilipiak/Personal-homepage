import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}
body{
width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.codgray};
  font-family: monospace;
  word-break: break-word;
}
  `;
