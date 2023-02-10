import { Text } from "../styled";
import {
  Tile,
  Description,
  Links,
  Link,
  Name,
  Wrapper as Wrapper,
} from "./styled";

export const Repos = ({ repos }) => {
  return (
    <Wrapper>
      {repos.map(({ id, name, description, html_url, homepage }) => (
        
        <Tile key={id}>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <Links>
            <Text>Demo:</Text>
            <Link target="_blank" href={homepage}>
              {homepage}
            </Link>
            <Description>Code:</Description>
            <Link target="_blank" href={html_url}>
              {html_url}
            </Link>
          </Links>
        </Tile>
      ))}
    </Wrapper>
  );
};
