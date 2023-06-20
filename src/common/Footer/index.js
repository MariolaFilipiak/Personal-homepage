import { Name } from "../../features/Header/styled";
import { Email, Paragraph, StyledFooter } from "./styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Name>Let`s talk</Name>
      <Email href="mailto:mfilipiak61@gmail.com">mfilipiak61@gmail.com</Email>
      <Paragraph>
        I’m always open to new projects whenever I have the time. If you have a
        websiteand need some help to make your , feel free to contact me 😊
      </Paragraph>
    </StyledFooter>
  );
};
