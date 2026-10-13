import React, { lazy, Suspense } from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router'
import MainLayout from '../layouts/MainLayout'
import App from '../App'
import { getUsers } from '../apis/userApi'
let About = lazy(() => import("../pages/About") )
let Contact = lazy(() => import("../pages/Contact"))

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <MainLayout />,
      children : [
        {
          path : "",
          element : <App />
        },
        {
          path : "about",
          loader : getUsers,
          HydrateFallback : ()=> <h1>loading data before api</h1>,
          element : <Suspense fallback = {<h1>Loading about</h1>} >
            <About />
          </Suspense>
        },
        {
          path : "contact",
          element : <Suspense fallback = {<h1>Loading contact</h1>} >
            <Contact />
          </Suspense>
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default AppRoutes
