import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md hover:shadow-lg transition">
      {/* User Header */}
      <div className="flex items-center gap-4 border-b pb-4">
        <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
          {user.name.firstname[0].toUpperCase()}
        </div>

        <div>
          <h2 className="text-xl font-semibold capitalize ">
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className="text-gray-500">@{user.username}</p>
        </div>
      </div>

      {/* User Details */}
      <div className="mt-5 flex flex-col gap-3">
        <div>
          <p className="text-sm text-gray-400">Email</p>
          <p className="text-gray-700">{user.email}</p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Phone</p>
          <p className="text-gray-700">{user.phone}</p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Address</p>
          <p className="text-gray-700 capitalize">
            {user.address.number}, {user.address.street}
          </p>
          <p className="text-gray-700 capitalize">
            {user.address.city} - {user.address.zipcode}
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="mt-5 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;
