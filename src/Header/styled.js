import styled from "styled-components";

export const Container = styled.header`
    display: grid;
    grid-template-columns:1fr auto;
  grid-template-rows:1fr auto;
  margin-top: 115px;
  margin-bottom: 65px;
`;

export const Wrapper= styled.div`
margin-left: 66px;
`;

export const MyImage = styled.img`
 width: 390px;
  height: 390px;
  border-radius: 50%;
`;

export const Info = styled.p`
margin-bottom: 35px;
font-size: 20px;
letter-spacing: 0.05em;
color: #6E7E91;
line-height: 1.4;
`;

export const Name = styled.h1`
font-size: 38px;
margin-top: 12px;
margin-bottom: 35px;
line-height: 46px;
letter-spacing: 0.05em;
color: #252525;
`;

export const Intro = styled.p`
font-size: 12px;
text-transform: uppercase;
margin-bottom: 12px;
margin-top: 115px;
word-break: break-all;
max-width: 630px;
line-height: 1.3;
color: #252525;
`;


