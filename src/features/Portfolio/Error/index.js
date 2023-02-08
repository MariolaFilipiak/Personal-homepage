import { ButtonLink, Header, Paragraph, Wrapper } from "./styled";

export const Error = () => (
  <Wrapper>
    <Header>Ooops! Something went wrong....</Header>
    <Paragraph>
      Sorry, failed to load Github projects
      <br />
      You can check them directly on Github.
    </Paragraph>
    <ButtonLink href="https://api.github.com/users/MariolaFilipiak/repos">
      {" "}
      Go to Github
    </ButtonLink>
  </Wrapper>
);
