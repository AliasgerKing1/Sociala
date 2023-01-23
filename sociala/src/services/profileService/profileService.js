
import axios from 'axios';

  let getUserProfile =(token) => {
    return axios.get('http://localhost:4000/api/userprofile/' + token);
  }
  let getUserProfileById =(id) => {
    return axios.get('http://localhost:4000/api/userprofile/byid/' + id);
  }

export {getUserProfile,getUserProfileById}