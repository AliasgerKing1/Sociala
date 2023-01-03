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
import EmailOpen from "./pages/EmailOpen";
import ComingSoon from "./pages/ComingSoon";
import LiveStream from "./pages/LiveStream";
import Analytics from "./pages/Analytics";
import Chat from "./pages/Chat";
import Error from "./pages/Error";
import Accountinfo from "./pages/Settngs/Accountinfo";
import Contactinfo from "./pages/Settngs/Contactinfo";
import Social from "./pages/Settngs/Social";

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
      <Route path="/email/open" element={<EmailOpen />} />
      <Route path="/comingsoon" element={<ComingSoon />} />
      <Route path="/livestream" element={<LiveStream />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/error" element={<Error />} />
      <Route path="/setting/account/info" element={<Accountinfo />} />
      <Route path="/setting/saveaddress" element={<Contactinfo />} />
      <Route path="/setting/social" element={<Social />} />
    </Routes>
  );
}

export default App;
