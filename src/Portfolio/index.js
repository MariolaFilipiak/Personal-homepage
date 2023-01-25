import { PortfolioWindow, StyledPortfolio, Title,Text } from "./styled";

const Portfolio = () => {
    return ( 
        <>
        <github.svg/>
        <Title>Portfolio</Title>
        <Text>My recent projects</Text>
        <StyledPortfolio>
        <PortfolioWindow>Portfolio</PortfolioWindow>
        <PortfolioWindow>Portfolio</PortfolioWindow>
        <PortfolioWindow>Portfolio</PortfolioWindow>
        <PortfolioWindow>Portfolio</PortfolioWindow>
        </StyledPortfolio>
        </>
     );
}
 
export default Portfolio;