import axios from 'axios';

const apiUrl = "http://localhost:4000/api/user/";
let addUser = (obj) => {
  return axios.post(apiUrl, obj);
};

let getUser = () => {
  return axios.get(apiUrl);
};
let getUserByid = (id) => {
  return axios.get(apiUrl + id);
};

let updateUser = (id, obj) => {
  return axios.put(apiUrl + "/" + id, obj);
}
export { addUser, getUser,updateUser,getUserByid };