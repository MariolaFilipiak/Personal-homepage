import styled from "styled-components";
import { ReactComponent as error } from "./error.svg";
export const Wrapper = styled.article`
  text-align: center;
`;
export const Header = styled.header`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #252525;
`;
export const Text = styled.p`
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #252525;
  margin-bottom: 32px;
`;

export const ButtonLink = styled.a`
  width: 168px;
  text-decoration: none;
  margin: 0;
  padding: 12px 16px;
  border-radius: 4px;
  background: rgb(3, 102, 214);
  color: white;
  cursor: pointer;
  text-align: center;
`;

export const Danger = styled(error)`
  margin-top: 96px;
  width: 37px;
  height: 34px;
`;
