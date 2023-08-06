import { Name } from "../../features/Header/styled";
import { Email, Paragraph, StyledFooter } from "./styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Name>Let`s talk</Name>
      <Email href="mailto:mfilipiak61@gmail.com">mfilipiak61@gmail.com</Email>
      <Paragraph>
        I’m always open to new projects. Don't hesitate to reach out to me. I'd be more than happy to collaborate and help bring your web projects to life! 😊
      </Paragraph>
    </StyledFooter>
  );
};
