import axios from "axios";
// requires atleast 2 argument : uinque key and fucntion that return promises

export const fetchSuperHeroes = () => {
     return axios.get("http://localhost:4000/superheroe");
    
  }

