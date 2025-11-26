import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import RootLayout from "../layouts/RootLayout";
import Coverage from "../pages/coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import BeRider from "../pages/be a rider/BeRider";
import PrivateRote from "./PrivateRote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/rider",
        element: (
          <PrivateRote>
            <BeRider></BeRider>
          </PrivateRote>
        ),
      },
      {
        path: "/coverage",
        loader: () => fetch("/service-center.json").then((res) => res.json()),
        Component: Coverage,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "/login", Component: Login },
      { path: "/registration", Component: Registration },
    ],
  },
]);
export default router;
