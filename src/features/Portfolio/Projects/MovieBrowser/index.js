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
import MovieImages from "./MovieBrowser.png";
import mockup from "./movieMockup.png";
import { Footer } from "../../../../common/Footer";
import { Projects } from "../..";
import { Buttons } from "../../../../common/Components/Buttons";

const MovieBrowser = () => {
  return (
    <Container>
      <Header>
        <Images src={MovieImages} />
        <Name>
          Movie <br />
          Browser
        </Name>
      </Header>
      <Wrapper>
        <ListTags>
          <Tags>React</Tags>
          <Tags>CSS</Tags>
          <Tags>Styled-component</Tags>
          <Tags>PublicApi</Tags>
          <Tags>JavaScript</Tags>
          <Tags>Redux</Tags>
          <Tags>Redux-Saga</Tags>
          <Tags>React-router-dom</Tags>
        </ListTags>
        <Box>
          <Title>.About</Title>
          <Text>
            The movies browser application was created as a final project in the
            course from Youcode. The app is used to browse and search for
            movies, actors, and film crew.
          </Text>
          <ButtonsBox>
            <Buttons
              href="https://mariolafilipiak.github.io/Movie-Browser/#/movies"
              alt="movie-browser-link-demo"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </Buttons>
            <Buttons
              href="https://github.com/MariolaFilipiak/Movie-Browser"
              alt="movie-browser-link-code"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </Buttons>
          </ButtonsBox>
        </Box>
      </Wrapper>
      <Mockup src={mockup} />
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

export default MovieBrowser;
