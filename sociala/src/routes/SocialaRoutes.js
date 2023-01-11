
import { Routes, Route } from "react-router-dom";

import Home from "../components/Sociala/pages/Home/Home";
import Setting from "../components/Sociala/pages/Setting/Setting";
import Stories from "../components/Sociala/pages/Stories/Stories";
import Video from "../components/Sociala/pages/Video/Video";
import Register from "../components/Sociala/pages/Register/Register";
import Login from "../components/Sociala/pages/Login/Login";
import Groups from "../components/Sociala/pages/Group/Group";
import Shop from "../components/Sociala/pages/Shop/Shop";
import Email from "../components/Sociala/pages/Email/Email/Email";
import EmailOpen from "../components/Sociala/pages/Email/EmailOpen/EmailOpen";
import ComingSoon from "../components/Sociala/pages/ComingSoon/ComingSoon";
import LiveStream from "../components/Sociala/pages/LiveStream/LiveStream";
import Analytics from "../components/Sociala/pages/Analytics/Analytics";
import Chat from "../components/Sociala/pages/Chat/Chat";
import Error from "../components/Sociala/pages/Error/Error";
import Accountinfo from "../components/Sociala/pages/Settings/AccountInfo/Accountinfo";
import Contactinfo from "../components/Sociala/pages/Settings/ContactInfo/ContactInfo";
import Social from "../components/Sociala/pages/Settings/Social/Social";
import Card from "../components/Sociala/pages/Settings/Card/Card";
import Password from "../components/Sociala/pages/Settings/Password/Password";
import Help from "../components/Sociala/pages/Settings/Help/Help";
import Notifications from "../components/Sociala/pages/Settings/Notifications/Notifications";
import Hotel from "../components/Sociala/pages/Hotel/Hotel/Hotel";
import Event from "../components/Sociala/pages/Event/Event";
import HotelDetails from "../components/Sociala/pages/Hotel/HotelDetails/HotelDetails";
import UserProfile from "../components/Sociala/pages/UserProfile/UserProfile";
import SinglePageShop from "../components/Sociala/pages/SinglePageShop/SinglePageShop";
import Job from "../components/Sociala/pages/Job/Job";
import Users from "../components/Sociala/pages/Users/Users";
import ForgetPassword from "../components/Sociala/pages/forgetPassword/ForgetPassword";
import Parents from "../components/Sociala/pages/Parents";

function SocialaRoutes() {
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
      <Route path="/Forget/password" element={<ForgetPassword />} />
      <Route path="/setting/account/info" element={<Accountinfo />} />
      <Route path="/setting/saveaddress" element={<Contactinfo />} />
      <Route path="/setting/social" element={<Social />} />
      <Route path="/setting/card" element={<Card />} />
      <Route path="/setting/password" element={<Password />} />
      <Route path="/setting/help" element={<Help />} />
      <Route path="/setting/notifications" element={<Notifications />} />




      <Route path="/parent" element={<Parents />} />
      {/* /Sociala */}
    </Routes>
  );
}

export default SocialaRoutes;
