import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar";
import Login from "./Login";
import Signup from "./Signup";
 
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />


      <Outlet />

    </div>
  );
};

export default Layout;
