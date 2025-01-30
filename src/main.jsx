import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router/AppRouter.jsx";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContextProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </HelmetProvider>
  </StrictMode>
);
