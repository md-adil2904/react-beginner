import React, { useEffect } from "react";

import { useState } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosInterceptors";

const UserPage = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    try {
      const res = await axiosInstance.get("/users");
      console.log(res);
      setUsersData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error in user api", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) return <h1 className="text-4xl">Loading Users</h1>;

  return (
    <div className="grid grid-cols-3 gap-4 p-4  ">
      {usersData.map((elem) => (
        <UserCard key={elem.id} user={elem} />
      ))}
    </div>
  );
};

export default UserPage;
