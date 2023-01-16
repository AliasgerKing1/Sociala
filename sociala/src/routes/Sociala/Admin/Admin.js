import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Helmet} from 'react-helmet';

import Home from '../../../components/Sociala/Sociala-Admin/pages/Home/Home';

const Admin = () => {
  return (
    <div>
<Helmet>
<link href="assets/Admin/libs/jsvectormap/css/jsvectormap.min.css" rel="stylesheet" type="text/css" />

{/* <!--Swiper slider css--> */}
<link href="assets/Admin/libs/swiper/swiper-bundle.min.css" rel="stylesheet" type="text/css" />

{/* <!-- Bootstrap Css --> */}
<link href="assets/Admin/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
{/* <!-- Icons Css --> */}
<link href="assets/Admin/css/icons.min.css" rel="stylesheet" type="text/css" />
{/* <!-- App Css--> */}
<link href="assets/Admin/css/app.min.css" rel="stylesheet" type="text/css" />
{/* <!-- custom Css--> */}
<link href="assets/Admin/css/custom.min.css" rel="stylesheet" type="text/css" />

</Helmet>

<Routes>
        <Route path="/admin/home" element={<Home />} />
        </Routes>
    </div>
  )
}

export default Admin;