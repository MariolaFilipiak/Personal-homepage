import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 90%;
  margin-left: 40px;
  margin-top: 60px;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-left: 20px;
  margin-top: 30px;
  }
`;
export const Email = styled.a`
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.emperor};
  font-weight: 900;
  text-decoration: none;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 10px;

  &:hover {
    color: ${({ theme }) => theme.color.flushOrange};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.min}){

    font-size: 14px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.emperor};
  max-width: 670px;
  margin-bottom: 56px;
  margin-left: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    font-size: 16px;
  }
`;
