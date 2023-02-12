import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  margin-top: 72px;
  padding: 32px;
  background: #ffffff;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const NextSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 18px;
  list-style: none;
  line-height: 25px;
  padding: 0;
  margin: 32px 0 0 0;
  color: #6e7e91;

  @media (max-width: 991px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 776px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  border-bottom: 1px solid rgba(209, 213, 218, 0.3);
  padding-bottom: 16px;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
  color: #252525;
`;

export const ListNextSkills = styled.li`
  margin-bottom: 8px;
  flex-basis: 33.3%;
  &:before {
    content: "●";
    margin: 0 16px 2px 0;
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    color: #0366d6;
  }
`;
