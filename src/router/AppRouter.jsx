import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/homepage/homePage";
import RoomsPage from "../pages/roomsPage/RoomsPage";

const AppRouter = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index  element={<HomePage />} />
        <Route path="rooms"  element={<RoomsPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;