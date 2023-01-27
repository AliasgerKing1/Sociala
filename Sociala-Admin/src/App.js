import './App.css';
import { useState, useEffect } from "react";
import AllData from "./Hooks/ProfileHook"
import SocialaAdminRoutes from './routes/SocialaAdminRoutes';
import { getAdminProfile } from './Services/AdminService/AdminService';
let App = () => {
  let [allData,setAllData] = useState("");
  let [id,setId] = useState("");
  useEffect(()=> {
    getAdminProfile().then(result=> {
        setId(result.data._id);
        setAllData(result.data);
      })
    }, [])
  let obj = {
    data : allData
  }
  return (
    <AllData.Provider value={obj}>
 <SocialaAdminRoutes/>
  </AllData.Provider>
  )
}

export default App;
