import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";
import MainProtected from "./protected/MainProtected";
import Home from "../pages/Home";
import PublicProtected from "./protected/PublicProtected";

const AppRoutes = () => {
  const dispatch = useDispatch();

  const hydrateUser = () => {
    console.log("hydrate processed...");
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      toast.error("unAuthorized users");
      return;
    }
    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children :[
            {
              path : "",
              element : <Home />
            }
          ]
        },
        
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
