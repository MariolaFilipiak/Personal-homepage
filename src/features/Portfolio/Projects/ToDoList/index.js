import {
  Arrow,
  Box,
  ButtonsBox,
  Container,
  Header,
  Images,
  Intro,
  ListItem,
  ListSkills,
  OtherProjectsBox,
  Text,
  Title,
  Wrapper,
} from "../styled";
import { Name } from "../../../../common/Components/Title/styled";
import { Projects } from "../..";
import { Footer } from "../../../../common/Footer";
import secondlife from "../../../Portfolio/images/todolist.png";
import { Buttons } from "../../../../common/Components/Buttons";
const ToDoList = () => {
  return (
    <Container>
      <Header>
        <Images src={secondlife} />
        <Name>
          to do
          <br />
          list
        </Name>
      </Header>
      <Wrapper>
        <ListSkills>
          <ListItem>React</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>Styled Components</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>Redux</ListItem>
          <ListItem>Redux-Saga</ListItem>
          <ListItem>React-router-dom</ListItem>
        </ListSkills>
        <Box>
          <Title>.About</Title>
          <Text>
            My to-do list . You can add tasks , delated tasks, show and hide
            tasks and download sample tasks.
          </Text>
          <ButtonsBox>
            <Buttons
              href="https://mariolafilipiak.github.io/To-do-list/"
              alt="to-do-list-link-demo"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </Buttons>
            <Buttons
              href="https://github.com/MariolaFilipiak/To-do-list"
              alt="to-do-list-link-code"
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

export default ToDoList;
