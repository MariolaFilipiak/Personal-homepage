import styled from "styled-components";

export const Name = styled.p`
  color: ${({ theme }) => theme.color.emperor};
  margin: 5px;
  font-size: 8vw;
  text-transform: uppercase;
  font-weight: 700;
  text-align: left;
  border-bottom: 1px solid  grey;
`;