import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const PublicProtected = () => {
  const { isAuthenticated, isLoading, user } = useSelector(
    (store) => store.auth,
  );
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (user) {
    return <Navigate to={"/main"} />;
  }
  return <Outlet />;
};

export default PublicProtected;
