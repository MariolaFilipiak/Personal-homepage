import { Link } from "react-router-dom";
import styled from "styled-components";

export const Buttons = styled.a`
  color: ${({ theme }) => theme.color.emperor};
  border: 1px solid #ff8000;
  border-radius: 5px;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 5px;
  padding: 10px;

  &:hover {
    color: ${({ theme }) => theme.color.flushOrange};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 10px;
    padding: 7px;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled(Link)`
  color: ${({ theme }) => theme.color.emperor};
  border: 1px solid #ff8000;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  max-width: 100px;
  text-transform: uppercase;
  margin: 10px;
  padding: 7px;
  text-align: center;
  font-size: 12px;

  &:hover {
    color: ${({ theme }) => theme.color.flushOrange};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 30px;
  }
`;
