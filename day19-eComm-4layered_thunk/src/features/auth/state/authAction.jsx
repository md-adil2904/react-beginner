import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      console.log("action is trigerring..");
      let res = await api.post("/auth/login", credentials);
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success("user logged in");
      return res.data;
    } catch (error) {
      toast.error("login failed");
      return thunkApi.rejectWithValue("login failed");
    }
  },
);

export const hydrateUserAction = createAsyncThunk(
  "auth/hydrate",
  async (_, thunkApi) => {
    let token = localStorage.getItem("accessToken");
    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
        },
      });

      console.log("response from hydration api", res);
      return res.data;
    } catch (error) {
      toast.error("unauthorized user");
      return thunkApi.rejectWithValue("unauthorized user");
    }
  },
);
