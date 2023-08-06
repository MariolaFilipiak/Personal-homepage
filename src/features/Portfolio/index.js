import { Name, Wrapper, Tile, Images, Box, ListTags, Tags } from "./styled";
import MovieBrowser from "./images/MovieBrowser.png";
import shop from "./images/shop.png";
import ulotne from "./images/ulotne.png";
import todolist from "./images/todolist.png";
import { ButtonsWrapper, Button } from "../../common/Components/Buttons";

export const Projects = () => {
  return (
    <>
    <Wrapper>
      <Box>
        <Images src={MovieBrowser} />
        <Tile>
          <Name>Movie Browser</Name>
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
        </Tile>
        <ButtonsWrapper>
          <Button to={"movie-browser"}>
          Details
          </Button>
        </ButtonsWrapper>
      </Box>
      <Box>
        <Images src={shop} />
        <Tile>
          <Name>The Second Life</Name>
          <ListTags>
            <Tags>React</Tags>
            <Tags>CSS</Tags>
            <Tags>Bootstrap</Tags>
            <Tags>TypeScript</Tags>
            <Tags>Redux</Tags>
            <Tags>Redux-Saga</Tags>
            <Tags>React-router-dom</Tags>
          </ListTags>
        </Tile>
        <ButtonsWrapper>
          <Button to={"the-second-life"}>
          Details
          </Button>
        </ButtonsWrapper>
      </Box>
      <Box>
        <Images src={ulotne} />
        <Tile>
          <Name>Ulotne Chwile Filipiak Fotografia</Name>
          <ListTags>
            <Tags>React</Tags>
            <Tags>CSS</Tags>
            <Tags>Styled Component</Tags>
            <Tags>JavaScript</Tags>
            <Tags>React-router-dom</Tags>
          </ListTags>
        </Tile>
        <ButtonsWrapper>
          <Button to={"ulotne-chwile"}>
          Details
          </Button>
        </ButtonsWrapper>
      </Box>
      <Box>
        <Images src={todolist} />
        <Tile>
          <Name>To do list</Name>
          <ListTags>
            <Tags>React</Tags>
            <Tags>CSS</Tags>
            <Tags>Styled Component</Tags>
            <Tags>TypeScript</Tags>
            <Tags>Redux</Tags>
            <Tags>Redux-Saga</Tags>
            <Tags>React-router-dom</Tags>
          </ListTags>
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
