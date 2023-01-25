import styled from "styled-components";

export const StyledPortfolio = styled.section`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;

export const PortfolioWindow = styled.div`
  display: inline-block;
  width: 590px;
  height: 400px;
  background-color: #ffffff;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;
export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  letter-spacing: 0.05em;
  line-height: 36px;
  margin:0 auto;
  padding-top:124px ;
`;
export const Text = styled.p`
  font-size: 20px;
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin: 8px 0px 0px;
`;

export const Icon = styled.div`
text-align:center;
`;
