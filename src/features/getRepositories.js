import axios from "axios";

  export const getRepositories = async () => {
    const response = await axios.get("https://api.github.com/users/mariolafilipiak/repos");
    if (!response.ok) 
    {
        new Error(response.statusText);
    }
    
    return await response.data;
};
