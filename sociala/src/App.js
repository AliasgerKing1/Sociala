import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Stories from "./pages/Stories";
import Video from "./pages/Video";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Groups from "./pages/Group";
import Shop from "./pages/Shop";
import Email from "./pages/Email";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="stories" element={<Stories />} />
      <Route path="setting" element={<Setting />} />
      <Route path="video" element={<Video />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/group" element={<Groups />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/email" element={<Email />} />
    </Routes>
  );
}

export default App;
