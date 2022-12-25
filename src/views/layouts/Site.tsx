import React from "react";
import { Outlet } from "react-router-dom";
import Toasts from "../../components/Toasts";

const Site = () => {
  return (
    <div className="container_center">
      <Outlet />

      <Toasts />
    </div>
  );
};

export default Site;
