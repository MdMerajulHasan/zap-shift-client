import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRote = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log("from private route", location);
  if (loading) {
    return (
      <div className="my-5 md:my-10 flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
        <span className="loading loading-bars loading-xl"></span>
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location?.pathname }}
        replace
      ></Navigate>
    );
  }
  return children;
};

export default PrivateRote;
