import React from "react";
import { Outlet } from "react-router-dom";

const Site = () => {
  return (
    <div className="container_center">
      <Outlet />
    </div>
  );
};

export default Site;
