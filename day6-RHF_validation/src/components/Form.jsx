import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setToggle, setUsers, users, updateUser }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updateUser || {
      name: "",
      email: "",
      mobile: "",
      image: "",
    },
  });

  const formSubmit = (data) => {
    console.log(data);
    if (updateUser) {
      setUsers((prev) => {
        const updateData = prev.map((elem) => {
          return elem.id === updateUser.id ? { ...data } : elem;
        });

        localStorage.setItem("users", JSON.stringify(updateData));
        return updateData;
      });
    } else {
      const arr = [...users, { ...data, id: nanoid() }];
      localStorage.setItem("users", JSON.stringify(arr));
      setUsers(arr);
    }
    setToggle((prev) => !prev);
    reset();
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-xl font-bold">Create user</h1>

      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 flex flex-col bg-black gap-3 p-4 rounded border-2 border-white "
      >
        <input
          {...register("name", {
            required: "name is required",
            pattern: {
              value: /^(?=.*[A-Za-z])[A-Za-z ]+$/,
              message: "Name should contain only letters",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "enter a valid email adress",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("mobile", {
            required: " mobile is required",
            minLength: {
              value: 10,
              message: "minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "maximum 10 digits are required",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}
        <input
          {...register("image", {
            required: "image is required",
          })}
          className="p-2 rounded outline-0 border border-white"
          type="url"
          placeholder="image"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        <button className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
