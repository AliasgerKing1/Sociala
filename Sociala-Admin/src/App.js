import './App.css';
import { useState, useEffect } from "react";

import { Provider } from 'react-redux';
import {combineReducers, configureStore} from "@reduxjs/toolkit"

import UserReducer from './Redux/UserReducer';

import SocialaAdminRoutes from './routes/SocialaAdminRoutes';
import { getAdminProfile,getUsers } from './Services/AdminService/AdminService';
import {getPhoto } from "./Services/ProfilePhotoService/ProfilePhotoService";

let rootReducer = combineReducers({
  UserReducer,
})
let store = configureStore({
reducer : rootReducer
})
let App = () => {
  let [allData,setAllData] = useState("");
  let [id,setId] = useState("");
  let [photo, setPhoto] = useState([]);
  let [allUserData, setAllUserData] = useState([]);
  useEffect(()=> {
    getAdminProfile().then(result=> {
        setId(result.data._id);
        setAllData(result.data);
      })
    }, [])
    useEffect(()=> {
      getPhoto().then(result=> {
      setPhoto(result.data[0].image);
      },[])
          })
          useEffect(()=> {
            getUsers().then(result=> {
setAllUserData(result.data);
            })
          },[])
          let obj = {
            data : allData,
            image : photo,
            allUserData : allUserData,
          }

  return (
    <Provider store={store}>
 <SocialaAdminRoutes/>
    </Provider>

  )
}

export default App;
