import React, { useState } from 'react'




const App = () => {
 

  let [count, setCount] = useState(0);
  console.log(count);

 let [flag, setFlag] = useState(true);
 console.log(flag)
  
  return (
    <div>
      <h1> count - {count} </h1>
      <button onClick={() => {
        setCount(count + 1);
      }} >increment</button>

      <button onClick={()=> {
        setFlag(true);
      }} >change Flag</button>
    </div>

  )
}

export default App
