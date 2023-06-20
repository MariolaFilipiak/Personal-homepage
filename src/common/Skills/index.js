import { Icon, ListIcon, Wrapper } from "./styled";
import { ReactComponent as Bootstrap } from "./icon/bootstrap.svg";
import { ReactComponent as Css } from "./icon/css.svg";
import { ReactComponent as Figma } from "./icon/figma.svg";
import { ReactComponent as Html } from "./icon/html.svg";
import { ReactComponent as Javascript } from "./icon/javascript.svg";
import { ReactComponent as Photoshop } from "./icon/photoshop.svg";
import { ReactComponent as React } from "./icon/react.svg";
import { ReactComponent as Redux } from "./icon/redux.svg";
import { ReactComponent as Typescript } from "./icon/typescript.svg";
import { ReactComponent as Wordpress } from "./icon/wordpress.svg";

export const Skills = () => {
  return (
    <Wrapper>
      <ListIcon>
        <Icon>
          <Html />
        </Icon>
        <Icon>
          <Javascript />
        </Icon>
        <Icon>
          <Css />
        </Icon>
        <Icon>
          <Typescript />
        </Icon>
        <Icon>
          <React />
        </Icon>
        <Icon>
          <Redux />
        </Icon>
        <Icon>
          <Bootstrap />
        </Icon>
        <Icon>
          <Figma />
        </Icon>
        <Icon>
          <Photoshop />
        </Icon>
        <Icon>
          <Wordpress />
        </Icon>
      </ListIcon>
    </Wrapper>
  );
};
