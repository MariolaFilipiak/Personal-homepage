import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    flex-direction: column;
    margin-bottom: 40px;
    margin-top: 40px;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const Box = styled.div`
  text-align: right;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  flex-direction: column;
`;
export const Header = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
export const Images = styled.img`
  width: 40vw;
  height: auto;
  margin: 0 auto;
`;
export const Title = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.color.flushOrange};
  margin: 10px;
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    font-size: 22px;
  }
`;
export const Text = styled.p`
  font-size: 20px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.emperor};
  line-height: 1.4;
  font-weight: 400;
  margin: 10px;
    padding: 10px;
  max-width: 500px;
  text-align: right;
  margin-top: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    font-size: 16px;
  }
`;
export const ListSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-family: monospace;
  font-size: 10px;
  list-style: none;
  color: ${({ theme }) => theme.color.emperor};
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  border: 1px solid #4f4f4f;
  border-radius: 20px;
  padding: 5px;
  margin: 5px;
`;

export const Mockup = styled.img`
  width: 80vw;
  max-height: 100%;
  margin: 0 auto;
  margin-top: 20px;
`;
export const OtherProjectsBox = styled.div`
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
export const Intro = styled.p`
  font-size: 3vw;
  font-family: monospace;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.emperor};
  text-transform: uppercase;
  margin: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoint.min}) {
    font-size: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
  }
`;
export const Arrow = styled(Link)`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  color: ${({ theme }) => theme.color.emperor};
`;
export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
`;
