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
import Card from "./pages/Settngs/Card";
import Password from "./pages/Settngs/Password";
import Help from "./pages/Settngs/Help";
import Notifications from "./pages/Settngs/Notifications";
import Hotel from "./pages/Hotel";
import Event from "./pages/Event";
import HotelDetails from "./pages/HotelDetails";
import UserProfile from "./pages/UserProfile";
import SinglePageShop from "./pages/SinglePageShop";
import Job from "./pages/Job";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      {/* Sociala */}
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
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/hotel/details" element={<HotelDetails />} />
      <Route path="/events" element={<Event />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/shop/single/product" element={<SinglePageShop />} />
      <Route path="/job" element={<Job />} />
      <Route path="/users" element={<Users />} />
      <Route path="/setting/account/info" element={<Accountinfo />} />
      <Route path="/setting/saveaddress" element={<Contactinfo />} />
      <Route path="/setting/social" element={<Social />} />
      <Route path="/setting/card" element={<Card />} />
      <Route path="/setting/password" element={<Password />} />
      <Route path="/setting/help" element={<Help />} />
      <Route path="/setting/notifications" element={<Notifications />} />

      {/* /Sociala */}
    </Routes>
  );
}

export default App;
