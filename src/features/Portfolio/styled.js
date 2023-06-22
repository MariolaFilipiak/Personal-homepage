import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Tile = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 40px 0px 40px;
`;

export const Name = styled.h3`
  font-size: 25px;
  font-family: monospace;
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.emperor};
  margin: 5px;
  padding: 0;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    text-align: center;
    font-size: 18px;
  }
`;

export const Images = styled.img`
  max-width: 300px;
  width: 50vw;
  max-height: 100%;
  margin-bottom: 20px;
`;
export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin-bottom: 60px;
  align-items: center;
  justify-items: stretch;
  border-bottom: 1px solid #4f4f4f;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 40px;
  }
`;
export const ListTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-family: monospace;
  font-size: 10px;
  list-style: none;
  color: ${({ theme }) => theme.color.emperor};
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const Tags = styled.li`
  border: 1px solid #4f4f4f;
  border-radius: 20px;
  padding: 5px;
  margin: 5px;
`;
