import axios from "axios";

let addPhoto = (obj) => {
return axios.post("http://localhost:4000/api/admin/profile/photo", obj);
}
let getPhoto = () => {
return axios.get("http://localhost:4000/api/admin/profile/photo");
}

export {addPhoto,getPhoto}