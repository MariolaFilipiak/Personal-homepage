import { email } from "../email";
import { Intro } from "../Header/styled";
import { SocialIcons } from "./SocialIcon";
import { Email, Paragraph, StyledFooter } from "./styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Intro>Let`s talk</Intro>
      <Email href={`mailto:${email}`}>{email}</Email>
      <Paragraph>
        I’m always open to new projects whenever I have the time. If you have a
        websiteand need some help to make your , feel free to contact me 😊
      </Paragraph>
      <SocialIcons />
    </StyledFooter>
  );
};
