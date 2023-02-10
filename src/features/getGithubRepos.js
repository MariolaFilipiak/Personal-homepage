import axios from "axios";

const URL = "https://api.github.com/users/mariolafilipiak/repos";

export const getGithubRepos = () =>
  axios.get(`${URL}`).then((response) => response.data);
