import axios from "axios";

const apiUrl = "http://localhost:4000/api/user";

let totalUser = () => {
  return axios.get(apiUrl + "/total");
};

let token = localStorage.getItem("token");
const header = token;

  let getAdminProfile =() => {
    return axios.get('http://localhost:4000/api/admin/profile/',{ headers: { header } });
  }
let getUsers = () => {
  return axios.get("http://localhost:4000/api/user")
}
let deleteUser = (id) => {
  return axios.delete("http://localhost:4000/api/user/" + id)
}
export { totalUser,getAdminProfile,getUsers,deleteUser };
