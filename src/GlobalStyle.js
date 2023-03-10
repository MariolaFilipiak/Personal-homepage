import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}
body{
  max-width: 1216px;
  margin: 0 auto;
  background-color: rgb(251, 251, 254);
  font-family: 'Inter';
  word-break: break-word;
}
  `;
