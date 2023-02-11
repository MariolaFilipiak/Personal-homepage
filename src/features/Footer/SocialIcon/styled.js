import styled from "styled-components";

export const List = styled.ul`
  margin-top: 56px;
  margin-bottom: 0;
  display: flex;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  margin-right: 24px;
  margin-bottom: 109px;
`;

export const Link = styled.a`
  transition: color 0.3s ease 0s;
  cursor: pointer;
  color: black;

  &:hover {
    color: #2517eb;
  }
`;

export const styleIcon = (Icon) => styled(Icon)`
  height: 47px;
  width: 47px;
`;
