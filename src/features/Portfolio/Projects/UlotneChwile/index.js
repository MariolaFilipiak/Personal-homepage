import {
    Arrow,
    Box,
    Container,
    Header,
    Images,
    Intro,
    ListItem,
    ListSkills,
    Mockup,
    OtherProjectsBox,
    Text,
    Title,
    Wrapper,
  } from "../styled";
  import { Name } from "../../../../common/Components/Title/styled";
  import { Projects } from "../..";
  import { Footer } from "../../../../common/Footer";
  import mockup from "./mockup (3).png";
  import UlotneChwileF from "./ulotnechwile.png";
  const UlotneChwile = () => {
    return (
      <Container>
        <Header>
          <Images src={UlotneChwileF} />
          <Name>
            Ulotne Chwile
          </Name>
        </Header>
        <Wrapper>
          <ListSkills>
            <ListItem>React</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Styled Components</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>React-router-dom</ListItem>
          </ListSkills>
          <Box>
            <Title>.About</Title>
            <Text>
            My personal business card as a photographer.
            </Text>
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
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </Arrow>
        <Footer />
      </Container>
    );
  };
  
  export default UlotneChwile;
  