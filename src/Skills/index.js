import skills from "./MySkills";
import { ListItem, ListSkills, Title, Wrapper } from "./styled";

const Skills = () => {
    return ( 
        <Wrapper>
            <Title>My skillset includes</Title>
            <ListSkills>
            {skills.map((skill) => (
               <ListItem key={skill}>{skill}</ListItem>  
               ))}
            </ListSkills> 
            
        </Wrapper>
     );
}
 
export default Skills;