import React from "react";
import {
  Arrow,
  Box,
  ButtonsBox,
  Container,
  Header,
  Images,
  Intro,
  ListTags,
  Mockup,
  OtherProjectsBox,
  Tags,
  Text,
  Title,
  Wrapper,
} from "../styled";
import { Name } from "../../../../common/Components/Title/styled";
import newsApp from "./News-App.png";
import { Footer } from "../../../../common/Footer";
import { Projects } from "../..";
import { Buttons } from "../../../../common/Components/Buttons";

const NewsApp = () => {
  return (
    <Container>
      <Header>
        <Images src={newsApp} />
        <Name>
          News <br />
          App
        </Name>
      </Header>
      <Wrapper>
        <ListTags>
          <Tags>React</Tags>
          <Tags>CSS</Tags>
          <Tags>Styled-component</Tags>
          <Tags>PublicApi</Tags>
          <Tags>TypeScript</Tags>
          <Tags>TanStack Query</Tags>
        </ListTags>
        <Box>
          <Title>.About</Title>
          <Text>
            This is an easy news app. I use TanStack Query and TypeScript. I use
            New York Times API. You can find categories and a search bar.
          </Text>
          <ButtonsBox>
            <Buttons
              href="https://mariolafilipiak.github.io/News-App/"
              alt="news-app-link-demo"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </Buttons>
            <Buttons
              href="https://github.com/MariolaFilipiak/News-App"
              alt="news-app-link-code"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </Buttons>
          </ButtonsBox>
        </Box>
      </Wrapper>
      <OtherProjectsBox>
        <Intro>Other Projects</Intro>
        <Projects />
      </OtherProjectsBox>
      <Arrow to="/">
        Back
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#FF8000"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </Arrow>
      <Footer />
    </Container>
  );
};

export default NewsApp;
