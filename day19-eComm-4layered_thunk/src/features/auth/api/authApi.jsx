// import { api } from "../../../config/api"

// export const loginUserAPi = async (credentials)=>{
//   try {
//     let res = await api.post("/auth/login",credentials);
//     console.log("login api", res)
//     localStorage.setItem("accessToken", res.data.accessToken);
//     return res.data;
//   } catch (error) {
//     console.log("error in login api", error)
//   }
// }

// export const hydrateUser = async () => {
//   let token = localStorage.getItem("accessToken");
//   try {
//     let res = await api.get("/auth/me",{
//         headers: {
//       'Authorization': `Bearer ${token}`, // Pass JWT via Authorization header
//       },
//     });
//     console.log("response fromm hydration api",res)
//     return res.data;

//   } catch (error) {
//     console.log("error in hydrate user", error)
//   }
// }
