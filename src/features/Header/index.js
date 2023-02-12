import {
  Container,
  HireMeLink,
  Info,
  Intro,
  MyImage,
  Name,
  Wrapper,
} from "./styled";
import mariolaFilipiakPrifile from "./foto.jpg";
import { ReactComponent as HireMe } from "./icon/hireMe.svg";
import { email } from "../email";
export const Header = () => {
  return (
    <Container>
      <MyImage src={mariolaFilipiakPrifile} alt="Mariola Filipiak" />
      <Wrapper>
        <Intro>This is</Intro>
        <Name>Mariola Filipiak</Name>
        <Info>
          💻 👩🏻 Frontend is something new for me,
          <br /> but I'm learning fast and I'm looking for my first job as a
          Frontend developer.
        </Info>
        <HireMeLink href={`mailto:${email}`} title={email}>
          <HireMe />
        </HireMeLink>
      </Wrapper>
    </Container>
  );
};
