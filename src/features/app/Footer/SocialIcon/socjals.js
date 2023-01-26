import { styleIcon } from "./styled";
import {ReactComponent as github} from "./icon/github.svg";
import {ReactComponent as facebook} from "./icon/facebook.svg";
import {ReactComponent as linkedin} from "./icon/linkedin.svg";

export const socials =[
    {
        name: "GitHub",
        url: "https://github.com/MariolaFilipiak",
        Icon: styleIcon(github),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/mariola.zubal.9/",
        Icon: styleIcon(facebook),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mariola-filipiak-2a3771262/",
        Icon: styleIcon(linkedin),
    },
];