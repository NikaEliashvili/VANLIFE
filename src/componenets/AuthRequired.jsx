import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const loggedIn = localStorage.getItem("loggedin");
  const location = useLocation();
  if (!loggedIn) {
    return (
      <Navigate
        to="/login"
        state={{
          message: "You must log in first !",
          prevLoc: location.pathname,
        }}
        replace
      />
    );
  }

  return <Outlet />;
}
