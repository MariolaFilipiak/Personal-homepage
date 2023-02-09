import styled from "styled-components";
import { ReactComponent as loading } from "./loading.svg";

export const Wrapper = styled.div`
  text-align: center;
`;

export const StyledSpinner = styled(loading)`
  max-width: 50px;
  text-align: center;
`;
