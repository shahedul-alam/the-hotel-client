import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/homepage/homePage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import ForgotPasswordPage from "../pages/forgotPasswordPage/ForgotPasswordPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import OurRooms, { roomsLoader } from "../pages/ourRoomsPage/OurRoomsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "our-rooms",
        element: <OurRooms />,
        loader: roomsLoader
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "register",
        element: <RegisterPage />
      },
      {
        path: "reset-password",
        element: <ForgotPasswordPage />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;