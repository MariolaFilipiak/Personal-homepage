import { Intro } from "../Header/styled";
import { SocialIcons } from "./SocialIcon";
import { Email, Paragraph, StyledFooter } from "./styled";

export const Footer = () => {
    return ( 
        <StyledFooter>
            <Intro>Let`s talk</Intro>
            <Email href="mailto:mariolafilipiak.IT@gmail.com">mariolafilipiak.IT@gmail.com</Email>
            <Paragraph>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me 😊 </Paragraph>
            <SocialIcons/>
        </StyledFooter>
     );
}
 