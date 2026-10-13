import axios from "axios"

export const getUsers = async () => {
  console.log("api rendering...")
  const res = await axios.get("https://fakestoreapi.com/users");
  return res.data;
};