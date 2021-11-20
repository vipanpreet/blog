import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  const { userInfo } = auth;

  return !isEmpty(userInfo) ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
