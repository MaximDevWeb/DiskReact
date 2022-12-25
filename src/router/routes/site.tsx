import { RouteObject } from "react-router-dom";
import Site from "../../views/layouts/Site";
import Home from "../../views/pages/site/Home";
import Policy from "../../views/pages/site/Policy";
import Page from "../../components/Page";
import Download from "../../views/pages/site/Download";

const site: Array<RouteObject> = [
  {
    path: "/",
    element: <Site />,
    children: [
      {
        index: true,
        element: <Page element={Home} />,
        loader: () => ({
          title: "Home demo",
        }),
      },
      {
        path: "/policy",
        element: <Page element={Policy} />,
        loader: () => ({
          title: "Privacy policy",
        }),
      },
      {
        path: "/link/:hash",
        element: <Page element={Download} />,
        loader: () => ({
          title: "Download file",
        }),
      },
    ],
  },
];

export default site;
