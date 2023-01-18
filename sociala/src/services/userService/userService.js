import axios from 'axios';

const apiUrl = "http://localhost:4000/api/user";
let addUser = (obj) => {
  return axios.post(apiUrl, obj);
};

let getUser = () => {
  return axios.get(apiUrl);
};
export { addUser, getUser };