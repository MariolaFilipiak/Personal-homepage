import styled from "styled-components";
import { ReactComponent as loading } from "./loading.svg";

export const Wrapper = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #252525;
  margin-top: 88px;
`;

export const StyledSpinner = styled(loading)`
  margin-top: 48px;
  height: 160px;
  width: 160px;

  @media (max-width: 467px) {
    width: 120px;
    height: 120px;
    text-align: center;
  }
`;
