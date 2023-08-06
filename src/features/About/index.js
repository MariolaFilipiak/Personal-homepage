import React from "react";
import { Box, Photo, Text, Title, Wrapper } from "./styled";
import me from "../Header/photo.png";

const About = () => {
  return (
    <Wrapper>
      <Photo src={me} />
      <Box>
        <Title>.About me</Title>
        <Text>
          I have been learning programming intensively for the last year. Now I
          am looking for my first job as a frontend developer. I know React,
          Redux, JS, HTML5, and CSS very well. I use GitHub on a daily basis.
          I know the basics of UX/UII feel good in a team, and care
          about learning new technologies
        </Text>
      </Box>
    </Wrapper>
  );
};

export default About;
