import styled from "styled-components";

export const StyledPortfolio = styled.section`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 991px) {
    margin-bottom: 72px;
  }
  @media (max-width: 467px) {
    margin-bottom: 48px;
  }
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #252525;
  margin: 0 auto;
`;
export const Text = styled.p`
  font-size: 20px;
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin: 8px 0px 0px;
`;

export const Icon = styled.div`
  text-align: center;
  margin-top: 72px;
  margin-bottom: 12px;
  color: blue;
`;
export const Container = styled.a`
  text-align: center;
`;
