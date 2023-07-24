import React from "react";
// import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Home from "../home/Home";
import Navbar from "../../components/navbar/Navbar";

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <div className="main_content">
          <Navbar />
          <Outlet />
        </div>
      </div>
      {/* <Navbar /> */}
    </div>
  );
};

export default Main;
