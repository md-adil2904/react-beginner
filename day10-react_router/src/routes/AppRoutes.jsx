import React from 'react'
import { Routes,Route } from "react-router";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Service from '../pages/Service';
import Detail from '../pages/Detail';



const AppRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element = {<Home />} >
          <Route path='detail' element = {<Detail/>} />
        </Route>
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/service" element = {<Service/>} />
      </Routes>
    </div>
  )
}

export default AppRoutes
