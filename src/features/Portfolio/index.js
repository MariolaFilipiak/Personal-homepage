import { Name, Wrapper, Tile, Images, Box } from "./styled";
import MovieBrowser from "./images/MovieBrowser.png";
import shop from "./images/shop.png";
import ulotne from "./images/ulotne.png";
import todolist from "./images/todolist.png";
import { ButtonsWrapper, Button } from "../../common/Components/Buttons";
import { ListItem, ListSkills } from "../../common/Skills/styled";

export const Projects = () => {
  return (
    <>
    <Wrapper>
      <Box>
        <Images src={MovieBrowser} />
        <Tile>
          <Name>Movie Browser</Name>
          <ListSkills>
            <ListItem>React</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Styled-component</ListItem>
            <ListItem>PublicApi</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>Redux</ListItem>
            <ListItem>Redux-Saga</ListItem>
            <ListItem>React-router-dom</ListItem>
          </ListSkills>
        </Tile>
        <ButtonsWrapper>
          <Button to={"/movie-browser"}>
          Details
          </Button>
        </ButtonsWrapper>
      </Box>
      <Box>
        <Images src={shop} />
        <Tile>
          <Name>The Second Life</Name>
          <ListSkills>
            <ListItem>React</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Bootstrap</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>Redux</ListItem>
            <ListItem>Redux-Saga</ListItem>
            <ListItem>React-router-dom</ListItem>
          </ListSkills>
        </Tile>
        <ButtonsWrapper>
          <Button to={"/the-second-life"}>
          Details
          </Button>
        </ButtonsWrapper>
      </Box>
      <Box>
        <Images src={ulotne} />
        <Tile>
          <Name>Ulotne Chwile Filipiak Fotografia</Name>
          <ListSkills>
            <ListItem>React</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Styled Component</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>React-router-dom</ListItem>
          </ListSkills>
        </Tile>
        <ButtonsWrapper>
          <Button to={"/ulotne-chwile"}>
          Details
          </Button>
        </ButtonsWrapper>
      </Box>
      <Box>
        <Images src={todolist} />
        <Tile>
          <Name>To do list</Name>
          <ListSkills>
            <ListItem>React</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Styled Component</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>Redux</ListItem>
            <ListItem>Redux-Saga</ListItem>
            <ListItem>React-router-dom</ListItem>
          </ListSkills>
        </Tile>
        <ButtonsWrapper>
          <Button to={"/to-do-list"}>
            Details
          </Button>
        </ButtonsWrapper>
      </Box>
    </Wrapper>
    </>
  );
};
