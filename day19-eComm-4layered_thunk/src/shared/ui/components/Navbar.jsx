import React from "react";
import { NavLink } from "react-router";
import { Box, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-10 bg-amber-900 ">
      <h1>Logo</h1>
      <div className="flex gap-10 items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-black" : "text-white"
          }
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-black" : "text-white"
          }
          to={"/main/product"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-black" : "font-white"
          }
          to={"/main/about"}
        >
          About
        </NavLink>
      </div>

      <div className="flex gap-10 items-center">
        <NavLink to={"/main/cart"}>
          <ShoppingCart />
        </NavLink>
        <NavLink to={"/main/orders"}>
          <Box />
        </NavLink>
        <button className="px-5 py-2 rounded bg-red-700 text-white cursor-pointer ">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
