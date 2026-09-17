import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  console.log("app rendering..");
  let [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );
  const [updateUser, setUpdateUser] = useState(null);
  console.log("users", users);

  const deleteUser = (id) => {
    const userData = users.filter((elem) => {
      return elem.id !== id;
    });
    setUsers(userData);
    localStorage.setItem("users", JSON.stringify(userData));
  };

  return (
    <div className="w-full p-3 h-screen flex flex-col gap-3">
      <Navbar setUpdateUser={setUpdateUser} setToggle={setToggle} />

      {toggle ? (
        <div className="flex gap-4">
          {users.map((elem, index) => (
            <UserCard
              setUpdateUser={setUpdateUser}
              setToggle={setToggle}
              key={index}
              del={deleteUser}
              user={elem}
            />
          ))}
        </div>
      ) : (
        <Form
          updateUser={updateUser}
          users={users}
          setToggle={setToggle}
          setUsers={setUsers}
        />
      )}
    </div>
  );
};

export default App;
