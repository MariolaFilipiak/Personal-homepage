import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Icon, Text, Title } from "./styled";
import { ReactComponent as Github } from "./github.svg";
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "../Portfolio/repoSlice";
import { Content } from "./Content";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repoStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Icon>
          <Github />
        </Icon>
        <Title>Portfolio</Title>
        <Text>My recent projects</Text>
      </Container>
      <Content status={repoStatus} repositories={repositories} />
    </>
  );
};
