import React, { useEffect } from 'react'
import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import axios from 'axios'

const App = () => {

  

  useEffect(()=>{
    console.log("app rendering..")
  },[])

  const [count, setCount] =  useState(0);
  const [toggle, setToggle] =  useState(true);
  const [apiData, setApiData] = useState(null)



  let getData = async ()=> {
    let res = await axios.get('https://fakestoreapi.com/products/1');
  console.log(res.data)
  setApiData(res.data)
  }

  useEffect(()=>{
    getData()
  },[])

  
  return (
    <div>
      <h1 >hello adil</h1>
      <h1>count - {count}</h1>
      <button onClick={() => setCount(count + 1)}
       className='p-3 bg-blue-500 text-2xl block rounded mb-5'>increment</button>
      <button className='p-3 bg-blue-500 text-2xl block rounded' onClick={() => setToggle((prev) => !prev)}>change section</button>
      {
        toggle ? <Home/> : <About/>
      }
    </div>
  )
}

export default App



