import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="font-syne">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;