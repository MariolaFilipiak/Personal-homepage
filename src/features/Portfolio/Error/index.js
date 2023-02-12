import { ButtonLink, Danger, Header, Text, Wrapper } from "./styled";

export const Error = () => (
  <Wrapper>
    <Danger />
    <Header>Ooops! Something went wrong....</Header>
    <Text>
      Sorry, failed to load Github projects
      <br />
      You can check them directly on Github.
    </Text>
    <ButtonLink
      href="https://github.com/MariolaFilipiak"
      target="_blank"
      rel="noreferrer"
    >
      Go to Github
    </ButtonLink>
  </Wrapper>
);
