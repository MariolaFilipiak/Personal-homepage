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
          <Buttons
            href="mailto:mfilipiak61@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact me
          </Buttons>
          <Buttons
            href="https://drive.google.com/file/d/19TbPUiRHa3MT5tUlC-mFMnOpHkrmgWWJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </Buttons>
        </Box>
      </Wrapper>
    </Container>
  );
};
