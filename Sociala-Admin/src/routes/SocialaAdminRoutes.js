import { useRoutes } from "react-router-dom";

import AdminLayouts from "../AdminLayouts/AdminrLayouts";
import adminRoutes from "./Admin/Admin";
import Login from "../components/pages/Authentication/Login";

// import Error from "../../components/Sociala/pages/Error/Error";

const SocialaAdminRoutes = () => {
const router = useRoutes([

    {
      path : "/admin",
      element: <Login />
    },
{
  path : "/admin",
  element: <AdminLayouts/>,
  children : adminRoutes
},
  ])
  return (router);
}


export default SocialaAdminRoutes;