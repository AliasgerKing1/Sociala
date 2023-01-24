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
      <Route path="/admin/home" element={<Home />} />
      <Route path="/admin/analytics" element={<Analytics />} />
      <Route path="/admin/crm" element={<Crm />} />
      <Route path="/admin/crypto" element={<Crypto />} />
      <Route path="/admin/nft" element={<Nft />} />
      <Route path="/admin/job" element={<Job />} />
      <Route path="/admin/projects" element={<Projects />} />


      <Route path="/admin/app/calender" element={<AppCalender />} />
      <Route path="/admin/app/chat" element={<AppChat />} />
      <Route path="/admin/app/companies" element={<Companies />} />
      <Route path="/admin/app/contacts" element={<AppContacts />} />
      <Route path="/admin/app/deals" element={<AppDeals />} />
      <Route path="/admin/app/leads" element={<AppLeads />} />


      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default Admin;