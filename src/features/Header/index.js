import { Box, Container, Name, Intro, Wrapper } from "./styled";
import { SocialIcons } from "../../common/SocjalIcons";
import { Buttons } from "../../common/Components/Buttons";
export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Name>
          Mariola
          <br />
          Filipiak
        </Name>
        <Intro>frontend developer</Intro>
        <Box>
          <SocialIcons />
        </Box>
        <Box>
          <Buttons href="mailto:mfilipiak61@gmail.com" re>
            Contact me
          </Buttons>
          <Buttons href="https://store4.gofile.io/download/b316313e-c0c1-45a6-8776-80fe6f9154c4/Mariola%20Filipiak%20CV.pdf">
            CV
          </Buttons>
        </Box>
      </Wrapper>
    </Container>
  );
};
