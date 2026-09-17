import React from "react";
import { nanoid } from "nanoid";

const UserCard = ({ user, del, setToggle, setUpdateUser }) => {
  return (
    <div className="p-4 border border-white bg-black rounded flex flex-col gap-2 w-fit">
      <div className="h-40 w-40">
        <img
          className="object-cover h-full w-full rounded-xl"
          src={user.image}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-1">
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.mobile}</h1>
      </div>

      <div className="flex w-full justify-between gap-4">
        <button
          className="bg-yellow-700 text-white py-2 px-3 rounded"
          onClick={() => {
            setUpdateUser(user);
            setToggle((prev) => !prev);
          }}
        >
          update
        </button>
        <button
          className="bg-red-700 text-white py-2 px-3 rounded"
          onClick={() => del(user.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
