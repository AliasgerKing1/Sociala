import "./App.css";
import { useState } from "react";
import SocialaRoutes from "./routes/Sociala/SocialaRoutes";

import AllData from "./Hooks/ProfileHook"
import { getUserProfile,getUserProfileById } from "./services/profileService/profileService";
import { useEffect } from "react";


function App() {
  let [id,setId] = useState("");
  let [allData,setAllData] = useState("");
  useEffect(()=> {
    let token = localStorage.getItem("token")
    getUserProfile(token).then(result=> {
        setId(result.data._id)
    })
  }, [])
  useEffect(()=> {
    getUserProfileById(id).then(result=> {
        setAllData(result.data[0]);
    })
}, [id])
  let obj = {
    LoggedInId : id,
    data : allData
  }
return (
  <>
  <AllData.Provider value={obj}>
  <SocialaRoutes />;
  </AllData.Provider>
  </>
)


}

export default App;
