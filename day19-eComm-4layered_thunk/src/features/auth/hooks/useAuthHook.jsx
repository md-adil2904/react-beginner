import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {useDispatch} from "react-redux"
import { loginUserAction } from "../state/authAction";

export const useAuth = () => {
  
  let navigate = useNavigate();
  let dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 

  const loginForm = async(data) => { 
    try {
      // api call
      // let response = await loginUserAPi(data); 
      // dispatch(addUser(response));
      dispatch(loginUserAction(data));
    } catch (error) {
      console.log("error in login form api", error)
    }
  };

  const registerForm = (data) => {
    console.log(data);
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginForm,
    registerForm,
  };
};