import { Container, Info, Intro, MyImage, Name, Wrapper } from "./styled";
import mariolaFilipiakPrifile from "./foto.jpg";

const Header = () => {
  return (
    <Container>
        <MyImage src={mariolaFilipiakPrifile} alt="Mariola Filipiak" />
        <Wrapper>
        <Intro>This is</Intro>
      <Name>Mariola Filipiak</Name>
      <Info>
        Frontend is something new for me but I'm learning fast and I'm looking
        for my first job as a Frontend developer.
      </Info>
      </Wrapper>
    </Container>
  );
};

export default Header;
