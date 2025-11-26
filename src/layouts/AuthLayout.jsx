import React from "react";
import Logo from "../components/logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="bg-[#fafdf0]">
      <div className="flex items-center">
        <div className="flex-1 bg-white pl-14 pt-11">
          <Logo></Logo>
          <Outlet></Outlet>
        </div>
        <div className="flex-1 w-full">
          <img src={authImage} alt="auth image" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
