import React from 'react'
import { Navigate, Outlet } from 'react-router'
import {useSelector} from "react-redux"

const MainProtected = () => {
  const {isAuthenticated,isLoading,user} = useSelector((store) => store.auth);
  if(isLoading) {
    return <h1>loading data...</h1>
  }
  if(!user) {
    return <Navigate to={"/"} />
  }
  return <Outlet />
}

export default MainProtected
