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
  padding: 0;
`;

export const Title = styled.h2`
  font-size: 30px;
  border-bottom: 1px solid;
  padding-bottom: 16px;
  line-height: 36px;
  letter-spacing: 0.05em;
  color: #252525;
`;

export const ListNextSkills = styled.li`
  margin-bottom: 8px;
  flex-basis: 33.3%;
  display: flex;
  flex-wrap: wrap;
  line-height: 1.4;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: #6e7e91;
`;
