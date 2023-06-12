import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Icon, Text, Title } from "./styled";
import { Content } from "./Content";
import { ReactComponent as Github } from "./github.svg";
import {
  fetchRepos,
  selectRepos,
  selectReposStatus,
} from "../Portfolio/repoSlice";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const reposStatus = useSelector(selectReposStatus);
  const repos = useSelector(selectRepos);

  useEffect(() => {
    dispatch(fetchRepos());
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
      <Content status={reposStatus} repos={repos} />
    </>
  );
};
