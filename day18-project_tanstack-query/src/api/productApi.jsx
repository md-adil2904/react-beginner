import { axiosInstance } from "../config/axiosInstance";

 export const getProductsDataApi = async () => {
  console.log("api is calling")
    try {
      const res = await axiosInstance.get("/products");
     
      return res.data.products;
      
    } catch (error) {
      console.log("error in product data", error);
    } 
  };