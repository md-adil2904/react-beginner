import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router"
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";
import { useState } from "react";

export const useAuth = () => {

  

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const {register,handleSubmit,reset,formState: {errors},} = useForm();
  const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || []);

  const loginForm = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    })

    if(!user) {
      toast.error("invalid user or password");
      return;
    }

    dispatch(addUser(user));
    localStorage.setItem("loggedInUser",JSON.stringify(user));
    toast.success("user loggedIn");
    reset();
  }

  const registerForm = (data) => {
    let arr = [...registeredUsers,data];
    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers",JSON.stringify(arr));
    toast.success("user registered");
    reset();
  }

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginForm,
    registerForm
  }
}