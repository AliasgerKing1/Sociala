import "./App.css";
import { useState, useEffect } from "react";
import SocialaRoutes from "./routes/Sociala/SocialaRoutes";

import AllData from "./Hooks/ProfileHook"
import { getUserProfile} from "./services/profileService/profileService";


function App() {
  let [allData,setAllData] = useState("");
  let [id,setId] = useState("");
  useEffect(()=> {
    getUserProfile().then(result=> {
        setId(result.data._id);
        setAllData(result.data);
      })
    }, [])
  let obj = {
    data : allData
  }
return (
  <>
  <AllData.Provider value={obj}>
  <SocialaRoutes />
  </AllData.Provider>
  </>
)


}

export default App;
