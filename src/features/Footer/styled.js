import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: 120px;
`;
export const Email = styled.a`
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: #252525;
  font-weight: 900;
  text-decoration: none;
  margin-top: 24px;
  margin-bottom: 24px;
  color: #252525;

  &:hover {
    color: #2517eb;
  }
  @media (max-width: 991px) {
    font-size: 28px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
  @media (max-width: 467px) {
    margin: 12px 0;
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #252525;
  max-width: 670px;
  margin-bottom: 56px;
`;
