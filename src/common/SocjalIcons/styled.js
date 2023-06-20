import styled from "styled-components";

export const List = styled.div`
  display: flex;
  list-style: none;
`;
export const Item = styled.li`
 margin:8px;
`;

export const Link = styled.a`
  transition: color 0.3s ease 0s;
  cursor: pointer;
  color:  ${({ theme }) => theme.color.flushOrange};
  &:hover {
    color:  ${({ theme }) => theme.color.internationalorange};
  }
`;

export const styleIcon = (Icon) => styled(Icon)`
  height: 47px;
  width: 47px;
  color:  ${({ theme }) => theme.color.flushOrange};
  &:hover {
    color: ${({ theme }) => theme.color.internationalorange};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    width: 20px;
    height: 20px;
  }


`;
