import {useDispatch, useSelector} from "react-redux"
import { PortfolioWindow, StyledPortfolio, Title,Text, Icon } from "./styled";
import { ReactComponent as Github } from "./github.svg";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "./Repositories/personalHomepageSlice";
import { useEffect } from "react";

export const Portfolio = () => {

    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories= useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    return ( 
        <>
        <Icon>
        <Github/>
        </Icon>
        <Title>Portfolio</Title>
        <Text>My recent projects</Text>
        <PortfolioWindow></PortfolioWindow>
        <StyledPortfolio>
        </StyledPortfolio>
        </>
     );
}