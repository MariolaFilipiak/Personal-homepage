import {
  LinksRow,
  Description,
  Link,
  Name,
  Wrapper as Wrapper,
  Tile,
  LinksValue,
  Links,
} from "./styled";

export const Repos = ({ repos }) => {
  return (
    <Wrapper>
      {repos.map(({ id, name, description, html_url, homepage }) => (
        <Tile key={id}>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <Links>
          <LinksRow>
            Demo:
            <LinksValue>
            <Link href={homepage} target="_blank" rel="noreferrer noopener">
{homepage}            </Link>
            </LinksValue>
          </LinksRow>
          <LinksRow>
            Code:
           <LinksValue>
           <Link 
             target="_blank"
             rel="noreferrer"
             href={html_url} 
            >{html_url}
            </Link>
           </LinksValue>
          </LinksRow>
          </Links>
        </Tile>
      ))}
    </Wrapper>
  );
};
