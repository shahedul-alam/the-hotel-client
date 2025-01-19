import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/homepage/homePage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import ForgotPasswordPage from "../pages/forgotPasswordPage/ForgotPasswordPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import OurRooms, { roomsLoader } from "../pages/ourRoomsPage/OurRoomsPage";
import RoomDetailsPage, { roomDetailsLoader } from "../pages/RoomDetailsPage/RoomDetailsPage";
import ErrorPage from "../pages/errorPage/ErrorPage";

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
        path: "our-rooms/:id",
        element: <RoomDetailsPage />,
        errorElement: <ErrorPage />,
        loader: roomDetailsLoader
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
        element: <NotFoundPage />
      }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;