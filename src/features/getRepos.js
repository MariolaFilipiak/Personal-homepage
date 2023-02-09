
const URL = "https://api.github.com/users/mariolafilipiak/repos";

fetch(`${URL}`)
.then(response => response.json())
.then(URL => console.log(URL))
 .catch(error => console.error("Something is bad !", error));