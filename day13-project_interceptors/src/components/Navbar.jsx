import React, { useContext } from "react";
import { NavLink } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { setLoggedInUser } = useContext(Auth);
  return (
    <div className="flex flex-col justify-between p-4">
      <div>
        <h1 className="text-2xl font-semibold mb-6 ">E-Commerce</h1>
        <div className="flex flex-col divide-y-2 text-2xl  ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "py-4 text-blue-500 font-semibold" : "py-4 text-black "
            }
            to={"/main"}
            end
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "py-4 text-blue-500 font-semibold" : "py-4 text-black "
            }
            to={"/main/user"}
            end
          >
            {" "}
            User
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "py-4 text-blue-500 font-semibold" : "py-4 text-black "
            }
            to={"/main/product"}
            end
          >
            {" "}
            Product
          </NavLink>
        </div>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("loggedInuser");
          toast.warn("user logged out");
          setLoggedInUser(null);
        }}
        className="px-4 py-2 text-white font-semibold bg-red-500 rounded-xl cursor-pointer "
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
