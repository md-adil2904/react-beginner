import React from "react";

const Navbar = ({ setToggle, setUpdateUser }) => {
  return (
    <div className="w-full flex flex-items p-4 justify-between items-center bg-black rounded ">
      <div>
        <img
          className="rounded-full"
          width={35}
          src="https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
        />
      </div>
      <div className="flex gap-6 capitalize font-semibold ">
        <h1>home</h1>
        <h1>about</h1>
        <h1>contact</h1>
      </div>

      <h1
        className="px-5 py-2 rounded bg-blue-600 text-white text-2xl cursor-pointer"
        onClick={() => {
          setUpdateUser(null);
          setToggle((prev) => !prev);
        }}
      >
        Create
      </h1>
    </div>
  );
};

export default Navbar;
