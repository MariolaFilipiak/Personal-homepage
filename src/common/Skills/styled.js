import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 80px;
  margin-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 40px;
    margin-top: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const Icon = styled.div`
  color: ${({ theme }) => theme.color.emperor};
  margin: 5px;
  padding: 5px;
  &:hover {
    color: ${({ theme }) => theme.color.flushOrange};
  }
`;
export const ListIcon = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 32px;
  justify-content: center;
`;
