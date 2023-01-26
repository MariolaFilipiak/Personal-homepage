
export const getRepositories = async () => {
    const response = await fetch("https://api.github.com/users/MariolaFilipiak/repos")

    if(!response.ok) {
        new Error();
        return Error.json();
      }
      
      return await response.json();
    };