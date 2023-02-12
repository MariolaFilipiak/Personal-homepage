import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;
  padding: 0;
  list-style: none;

  @media (max-width: 991px) {
    grid-template-columns: auto;
    gap: 24px;
    justify-content: center;
  }
`;
export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 592px;
  padding: 56px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
  }
  @media (max-width: 991px) {
    padding: 40px;
  }
`;
export const Name = styled.h3`
  font-size: 24px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: #0366d6;
`;

export const Description = styled.p`
  margin-top: 24px;
  line-height: 1.4;
  color: #6e7e91;
`;

export const Link = styled.a`
  text-decoration: none;
  color: rgb(3, 102, 214);
  border-bottom: 1px solid rgb(3, 102, 214);
  padding-bottom: 1px;

  &:hover {
    color: #2517eb;
  }
`;

export const Links = styled.dl`
  margin-top: 24px;
  margin-bottom: 0;
  display: grid;
  grid-gap: 8px;
  line-height: 1.6;
`;
export const LinksRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #6e7e91;
`;

export const LinksValue = styled.dl`
  margin: 0;
`;
