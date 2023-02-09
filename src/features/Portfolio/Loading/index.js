import { StyledSpinner, Wrapper } from "./styled";

export const Loading = () => (
  <Wrapper>
    Please wait, projects are being loaded...<br/>
    <StyledSpinner />
  </Wrapper>
);
