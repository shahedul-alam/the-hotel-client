import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <h1>main layout</h1>
      <Outlet />
    </>
  );
};

export default MainLayout;