import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import RootLayout from "../layouts/RootLayout";
import Coverage from "../pages/coverage/Coverage";

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
        path: "/coverage",
        loader: () => fetch("/service-center.json").then((res) => res.json()),
        Component: Coverage,
      },
    ],
  },
]);
export default router;
