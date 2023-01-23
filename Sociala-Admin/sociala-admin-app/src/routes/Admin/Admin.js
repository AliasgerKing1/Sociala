import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../components/pages/dashboards/Home/Home';
import Analytics from "../../components/pages/dashboards/Analytics/Analytics"
import Crm from "../../components/pages/dashboards/Crm/Crm";
import Crypto from '../../components/pages/dashboards/Crypto/Crypto';
import Nft from "../../components/pages/dashboards/Nft/Nft";
import Job from "../../components/pages/dashboards/Job/Job";
import Projects from "../../components/pages/dashboards/Projects/Projects";


import AppCalender from '../../components/pages/Apps/AppCalender/AppCalender'; 
import AppChat from '../../components/pages/Apps/AppChat/AppChat';
import Companies from '../../components/pages/Apps/AppCrm/Companies/Companies';
import AppContacts from '../../components/pages/Apps/AppCrm/AppContacts/AppContacts';
import AppDeals from '../../components/pages/Apps/AppCrm/AppDeals/AppDeals';
import AppLeads from '../../components/pages/Apps/AppCrm/AppLeads/AppLeads';


import Login from '../../components/pages/Authentication/Login';

const Admin = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/crm" element={<Crm />} />
      <Route path="/crypto" element={<Crypto />} />
      <Route path="/nft" element={<Nft />} />
      <Route path="/job" element={<Job />} />
      <Route path="/projects" element={<Projects />} />


      <Route path="/appcalender" element={<AppCalender />} />
      <Route path="/appchat" element={<AppChat />} />
      <Route path="/appcompanies" element={<Companies />} />
      <Route path="/appcontacts" element={<AppContacts />} />
      <Route path="/appdeals" element={<AppDeals />} />
      <Route path="/appleads" element={<AppLeads />} />


      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default Admin;