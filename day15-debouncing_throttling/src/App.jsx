import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  console.log("app rendering...")
  const [searchData, setSearchData] = useState(null)

  const [productData, setProductData] = useState([])
  const [scrollY, setScrollY] = useState(null);
  let throttle = false;

  const getProductData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      
      setProductData(res.data)
    } catch (error) {
      console.log("error in product", error)
    }
  };

  useEffect(() => {
    getProductData();
  },[]);

  // debouncing...
  let filteredData = () => {
    console.log("filter running...");
    let res = productData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    })
    setProductData(res)
  };

  useEffect(()=>{
    if(!searchData) return; 
    
    let timeOut = setTimeout(()=>{
      filteredData();
    },700);

    return () => clearTimeout(timeOut);
  },[searchData]);

  // throttling

  useEffect(()=>{

    
    let handleScroll = () => {
      if(throttle) return;
      throttle = true;
      console.log("scrolled triggered...");
      setScrollY(window.scrollY)

      // setTimeout(()=>{
      //   throttle = false;
      // },5000)
    }
    
    window.addEventListener("scroll",handleScroll);

    return () => {window.removeEventListener("scroll",handleScroll)}
  },[])
  

  return (
    <div>
      <h1>adil alam</h1>
      <input  onChange={(e) => setSearchData(e.target.value) }
      style={{ padding: "10px 30px" }} type="text" placeholder='enter product name'  />

      {
        productData.map((elem)=>{
          return <h1 key={elem.id} >{elem.title}</h1>
        })
      }
    </div>
  )
}

export default App
