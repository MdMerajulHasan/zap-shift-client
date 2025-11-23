import React from "react";
import Logo from "../components/logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Logo></Logo>
      <div className="flex">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          <img src={authImage} alt="auth image" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
