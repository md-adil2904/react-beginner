import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>I am home page</h1>
      {/* <NavLink to={"/detail"} >home ke andar</NavLink> */}
      <button onClick={()=> navigate("/detail")} >home ke andar</button>
      <Outlet/>
    </div>
  )
}

export default Home
