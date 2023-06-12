import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;

  @media (max-width: 776px) {
    grid-template-columns: 2fr;
    grid-gap: 48px;
  }
  @media (max-width: 447px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
  @media (max-width: 991px) {
    grid-template-columns: 2fr;
    grid-gap: 48px;
  }
`;

export const Wrapper = styled.div`
  @media (max-width: 991px) {
    margin-left: 10px;
    margin-top: 10px;
  }
  @media (max-width: 467px) {
    margin-left: 10px;
    margin-top: 10px;
  }
`;

export const MyImage = styled.img`
  width: 60vw;
  max-width: 390px;
  max-height: 390px;
  border-radius: 50%;
  margin-right: 66px;

  @media (max-width: 991px) {
    margin-left: 10px;
    margin: 0;
  }
  @media (max-width: 767px) {
    margin-left: 10px;
    margin: 0;
  }
  @media (max-width: 467px) {
    margin-left: 10px;
    margin: 0;
  }
`;

export const Info = styled.p`
  margin-bottom: 35px;
  font-size: 20px;
  letter-spacing: 0.05em;
  color: #6e7e91;
  line-height: 1.4;
  font-weight: 400;

  @media (max-width: 767px) {
    margin: 16px 0 24px;
    font-size: 17px;
  }
  @media (max-width: 467px) {
    margin: 16px 0 24px;
  }
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin-top: 12px;
  margin-bottom: 35px;
  letter-spacing: 0.05em;
  color: #6e7e91;

  @media (max-width: 467px) {
    font-size: 30px;
  }
  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

export const Intro = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  color: #6e7e91;
  padding-top: 64px;
  font-weight: 700;

  @media (max-width: 467px) {
    margin-top: 20px;
  }
  @media (max-width: 767px) {
    margin-top: 20px;
  }
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;
export const HireMeLink = styled.a`
  width: 154px;
  height: 49px;
  margin-bottom: 146px;
  display: inline-flex;
  cursor: pointer;
  &:hover {
    border: 2px solid rgba(3, 102, 214, 0.2);
  }
  @media (max-width: 467px) {
    margin-bottom: 10px;
  }
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
  @media (max-width: 991px) {
    margin-bottom: 15px;
  }
`;
