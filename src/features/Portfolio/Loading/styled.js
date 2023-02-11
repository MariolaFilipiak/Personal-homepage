import styled from "styled-components";
import { ReactComponent as loading } from "./loading.svg";

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 88px;
  font-size:20px;
  display: grid;
  justify-content: center;
`;

export const StyledSpinner = styled(loading)`
  margin-top: 48px;
  height: 160px;
  width: 160px;

`;
