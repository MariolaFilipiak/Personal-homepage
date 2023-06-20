import styled from "styled-components";
import background from "./background.png";

export const Container = styled.header`
  background-image: url("${background}");
  background-size: 120%;
  background-repeat: no-repeat;
  background-position-y: inherit;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  padding: 20px;
`;
export const Intro = styled.p`
  font-size: 3vw;
  margin: 5px;
  font-family: monospace;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.emperor};
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    font-size: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.color.mineshaft};
  margin: 5px;
  font-size: 10vw;
  text-transform: uppercase;
  font-weight: 700;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 5px;
`;
