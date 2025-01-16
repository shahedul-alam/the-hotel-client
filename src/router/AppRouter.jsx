import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/homepage/homePage";

const AppRouter = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index  element={<HomePage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;