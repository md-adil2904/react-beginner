import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="p-5 mt-5 bg-black-700 flex justify-between items-center text-2xl ">
      <h1>Logo</h1>
      <div className="flex gap-10 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Service</NavLink>
      </div>

      <button>Login</button>
    </div>
  );
};

export default Navbar;
