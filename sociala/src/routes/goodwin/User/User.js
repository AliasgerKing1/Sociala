import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";


import Home from "../../../components/goodwin/pages/Home/Home";

const User = () => {
  return (
    <div>
    <Helmet>
    </Helmet>
      <Routes>
        <Route path="/goodwin/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default User;
