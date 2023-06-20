import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 160px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    margin-bottom: 40px;
    margin-top: 40px;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.color.flushOrange};
  margin: 10px;
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    font-size: 22px;
  }
`;
export const Text = styled.p`
  font-size: 20px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.emperor};
  line-height: 1.4;
  font-weight: 400;
  margin: 20px;
  text-align: right;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    font-size: 16px;
  }
`;
export const Photo = styled.img`
  border-radius: 50%;
  width: 20vw;
  margin: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  display: none;
  }
`;
export const Box = styled.div`
text-align: right;
`;
