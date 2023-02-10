import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  margin-bottom: 65px;
`;

export const Wrapper = styled.div`
  margin-left: 66px;
`;

export const MyImage = styled.img`
  width: 390px;
  height: 390px;
  border-radius: 50%;
  margin-top: 115px;
`;

export const Info = styled.p`
  margin-bottom: 35px;
  font-size: 20px;
  letter-spacing: 0.05em;
  color: #6e7e91;
  line-height: 1.4;
  font-weight: 400;
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
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
  color: #6e7e91;
  margin-top: 183px;
  font-weight: 700;
  font-style: normal;
`;

export const HireMeLink = styled.a`
  width: 154px;
  height: 49px;
  margin-top: 32px;
  margin-bottom: 146px;
  background-color: rgb(3, 102, 214);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  transition: 0.3s;
  border: 1px solid rgba(209, 213, 218, 0.3);
border-radius: 4px;
cursor: pointer;
&:hover, &:active {
    box-shadow: 2px -2px 0px 
    -2px 2px 0px 
    2px 2px 0px 
      -2px -2px 0px 
  }
  @media (max-width:  {
    font-size: 18px;
    line-height: 22px;
  }
`;
