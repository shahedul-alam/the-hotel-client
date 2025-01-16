import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="font-syne">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;