import { Outlet } from "react-router-dom";
import Sidebar from "../Siderbar/index";

const AppLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
