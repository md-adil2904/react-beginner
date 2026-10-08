import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="h-screen grid grid-cols-[1fr_7fr] divide-x-2">
      <Navbar />
      <div className="overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
