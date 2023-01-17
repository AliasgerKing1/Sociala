import axios from "axios";
import {useNavigate } from 'react-router-dom';


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

  let Logout = () => {
    // const Navigate = useNavigate();
      // Navigate(['/']);
      localStorage.removeItem('token');
  }
  export {DoLogin,IsLoggedIn,Logout}