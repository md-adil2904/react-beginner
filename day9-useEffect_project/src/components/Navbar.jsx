import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  const { setIsCartOpen } = useContext(MyStore);

  return (
    <div className="p-4 flex justify-between bg-black">
      <h1>Logo</h1>
      <div className="flex gap-10 text-2xl">
        <h1
          onClick={() => {
            setIsCartOpen(true);
          }}
          className="cursor-pointer"
        >
          {" "}
          Home{" "}
        </h1>
        <h1
          onClick={() => {
            setIsCartOpen(false);
          }}
          className="cursor-pointer"
        >
          {" "}
          Cart{" "}
        </h1>
      </div>
      <h1>Login</h1>
    </div>
  );
};

export default Navbar;
