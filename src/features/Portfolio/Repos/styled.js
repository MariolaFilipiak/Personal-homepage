import styled from "styled-components";

export const Wrapper = styled.div`
   padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    background-color:#FFFFFF; 
`;
export const Container = styled.li`
    width: 100%;
    height: 322px;
    padding: 56px;
    color: transparent;
    border: 6px solid rgba(209, 213, 218, 0.3);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    &:hover {
        border: 6px solid rgba(3, 102, 214, 0.2);
    }
`;

export const Tile = styled.a``;
export const Name = styled.h3``;

export const Description = styled.p``;

export const Link = styled.div``;

export const Links = styled.a``;
export const Text = styled.a``;
