import { RouteObject } from "react-router-dom";
import Page from "../../components/Page";
import Dashboard from "../../views/layouts/Dashboard";
import Files from "../../views/pages/dashboard/Files";
import Layout from "../../components/Layout";
import { auth } from "../middlewares";
import Photos from "../../views/pages/dashboard/Photos";
import Albums from "../../views/pages/dashboard/Albums";
import Shared from "../../views/pages/dashboard/Shared";
import Archives from "../../views/pages/dashboard/Archives";
import Trash from "../../views/pages/dashboard/Trash";

const dashboard: Array<RouteObject> = [
  {
    path: "/dashboard",
    element: <Layout element={Dashboard} middleware={auth} />,
    children: [
      {
        index: true,
        element: <Page element={Files} title="All files" />,
      },
      {
        path: "photos",
        element: <Page element={Photos} title="Photos" />,
      },
      {
        path: "albums",
        element: <Page element={Albums} title="Albums" />,
      },
      {
        path: "shares-access",
        element: <Page element={Shared} title="Shared" />,
      },
      {
        path: "archives",
        element: <Page element={Archives} title="Archives" />,
      },
      {
        path: "trash",
        element: <Page element={Trash} title="Trash" />,
      },
    ],
  },
];

export default dashboard;
