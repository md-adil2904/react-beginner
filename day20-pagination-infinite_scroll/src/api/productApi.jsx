import axios from 'axios'

export const getAllProductAPi = async (limit,pageParams) => {
  console.log("page param",pageParams)
    try {
      let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${pageParams}`);
      
      return res.data;
    } catch (error) {
      console.log("error in product api", error);
    }
  };