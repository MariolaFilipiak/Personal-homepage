import nextSkills from "./nextSkills";
import { Wrapper, Title, ListNextSkills, NextSkills } from "./styled";

const NextSklills = () => {
    return ( 
        <Wrapper>
            <Title>What I want to learn next</Title>
<NextSkills>
{nextSkills.map((next) => (
               <ListNextSkills key={next}>{next}</ListNextSkills>  
               ))}
</NextSkills>
        </Wrapper>
     );
}
 
export default NextSklills;