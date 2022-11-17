import { RouteObject } from "react-router-dom";
import Auth from "../../views/layouts/Auth";
import Login from "../../views/pages/auth/Login";
import Register from "../../views/pages/auth/Register";
import Page from "../../components/Page";
import Forgot from "../../views/pages/auth/Forgot";
import Password from "../../views/pages/auth/Password";
import Layout from "../../components/Layout";
import { guest } from "../middlewares";

const auth: Array<RouteObject> = [
  {
    path: "/auth",
    element: <Layout element={Auth} middleware={guest} />,
    children: [
      {
        index: true,
        element: <Page element={Login} title="Log In" />,
      },
      {
        path: "register",
        element: <Page element={Register} title="Sing Up" />,
      },
      {
        path: "forgot-password",
        element: <Page element={Forgot} title="Forgot password" />,
      },
      {
        path: "new-password",
        element: <Page element={Password} title="New password" />,
      },
    ],
  },
];

export default auth;
