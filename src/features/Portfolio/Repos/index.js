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
      {repos.map(
        ({ id, name, description, html_url, homepage, login, owner }) => (
          <Tile key={id}>
            <Name>{name}</Name>
            <Description>{description}</Description>
            <Links>
              <LinksRow>
                Demo:
                <LinksValue>
                  <Link
                    href={`https://${owner.login}.github.io/${name}/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GithubPages
                  </Link>
                </LinksValue>
              </LinksRow>
              <LinksRow>
                Code:
                <LinksValue>
                  <Link target="_blank" rel="noreferrer" href={html_url}>
                    Repository
                  </Link>
                </LinksValue>
              </LinksRow>
            </Links>
          </Tile>
        )
      )}
    </Wrapper>
  );
};
