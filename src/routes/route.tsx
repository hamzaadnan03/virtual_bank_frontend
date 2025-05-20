import { createBrowserRouter } from "react-router";
import Home from "../views/Home";
import LoginPage from "../views/LoginPage";
import SignupPage from "../views/SignupPage";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoutes from "../components/PublicRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoutes>
        <LoginPage />
      </PublicRoutes>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoutes>
        <SignupPage />
      </PublicRoutes>
    ),
  },
]);
export default router;
