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
          💻 👩🏻I have been learning programming intensively for the last year.
          Now I am looking for my first job as a frontend developer. I know
          React, Redux, JS, HTML5, and CSS very well. I use git and RWD on a
          daily basis, moreover, I know the basics of UX/UII feel good in a team
          and I care about learning new technologies
        </Info>
        <HireMeLink href={`mailto:${email}`} title={email}>
          <HireMe />
        </HireMeLink>
      </Wrapper>
    </Container>
  );
};
