import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { registeredUsers, setRegisteredUsers, setLoggedInUser } =
    useContext(Auth);
  const formSubmit = (data) => {
    const arr = [...registeredUsers, data];

    setRegisteredUsers(arr);
    setLoggedInUser(data);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    localStorage.setItem("loggedInuser", JSON.stringify(data));
    navigate("/main");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-4"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>

            <input
              {...register("name", {
                required: "name is required",
              })}
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>

            <input
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "enter a valid email adress",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>

            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be atleast 6 characters",
                },
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p
          onClick={() => navigate("/")}
          className="text-center text-gray-600 mt-6"
        >
          Already have an account?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
