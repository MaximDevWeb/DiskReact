import { RouteObject } from "react-router-dom";
import Site from "../../views/layouts/Site";
import Home from "../../views/pages/site/Home";
import Policy from "../../views/pages/site/Policy";
import Page from "../../components/Page";

const site: Array<RouteObject> = [
  {
    path: "/",
    element: <Site />,
    children: [
      {
        index: true,
        element: <Page element={Home} title="Home demo" />,
      },
      {
        path: "/policy",
        element: <Page element={Policy} title="Privacy policy" />,
      },
    ],
  },
];

export default site;
