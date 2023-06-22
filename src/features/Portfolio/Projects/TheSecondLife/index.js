import React from "react";
import {
  Arrow,
  Box,
  ButtonsBox,
  Container,
  Header,
  Images,
  Intro,
  Tags,
  ListTags,
  Mockup,
  OtherProjectsBox,
  Text,
  Title,
  Wrapper,
} from "../styled";
import { Name } from "../../../../common/Components/Title/styled";
import { Projects } from "../..";
import { Footer } from "../../../../common/Footer";
import mockup from "./mockup (2).png";
import secondlife from "./thesecondlife.png";
import { Buttons } from "../../../../common/Components/Buttons";
const TheSecondLife = () => {
  return (
    <Container>
      <Header>
        <Images src={secondlife} />
        <Name>
          The second <br />
          life
        </Name>
      </Header>
      <Wrapper>
        <ListTags>
          <Tags>React</Tags>
          <Tags>CSS</Tags>
          <Tags>Bootstrap</Tags>
          <Tags>TypeScript</Tags>
          <Tags>Redux</Tags>
          <Tags>Redux-Saga</Tags>
          <Tags>React-router-dom</Tags>
        </ListTags>
        <Box>
          <Title>.About</Title>
          <Text>
            Easy online shop with Bootstrap and TypeScript. I created category
            products, a cart, and details products.
          </Text>
          <ButtonsBox>
            <Buttons
              href="https://mariolafilipiak.github.io/The-second-life/"
              alt="The-second-life-link-demo"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </Buttons>
            <Buttons
              href="https://github.com/MariolaFilipiak/The-second-life"
              alt="The-second-life-link-code"
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
export default TheSecondLife;
