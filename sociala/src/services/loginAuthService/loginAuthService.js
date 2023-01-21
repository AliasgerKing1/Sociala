import axios from "axios";
import {useNavigate } from 'react-router-dom';

let Logout = () => {
  // const navigate = useNavigate();
  //   navigate('/');
  localStorage.removeItem('token');
}
let DoLogin = (obj) => {
  return axios.post(
      'http://localhost:4000/api/user/loginauth/',
      obj
    );
  }

  let IsLoggedIn = () => {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }


  export {DoLogin,IsLoggedIn,Logout}