import { useContext } from "react";
import {FormState, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

export const useAuthHook = () => {
  const navigate = useNavigate();

  const { loggedInUser, setLoggedInUser, registeredUsers, setRegisteredUsers } =
    useContext(Auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginFormSubmit = (data) => {
    const user = registeredUsers.find((elem) => {
      return elem.email === data.email && elem.password === data.password;
    });

    if (user) {
      setLoggedInUser(user);
      localStorage.setItem("loggedInuser", JSON.stringify(user));
      toast.success("user loggedIn");
      navigate("/main");
    } else {
      toast.error("invalid email or password");
    }

    reset();
  };

  const registerFormSubmit = (data) => {
    const arr = [...registeredUsers, data];

    setRegisteredUsers(arr);
    setLoggedInUser(data);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    localStorage.setItem("loggedInuser", JSON.stringify(data));
    navigate("/main");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    reset,
    loginFormSubmit,
    registerFormSubmit,
  };
};
