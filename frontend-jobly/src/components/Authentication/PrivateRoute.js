import { useContext } from "react";
import CurrUserContext from "./CurrUserContext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { authed } = useContext(CurrUserContext);
  return authed ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
