import axios from "axios";

const apiUrl = "http://localhost:4000/api/user";

let totalUser = () => {
  return axios.get(apiUrl + "/total");
};

export { totalUser };
