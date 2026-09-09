import React, { useState } from 'react'

const App = () => {

  console.log("app rerendering..")

  let [count, setCount] = useState(0);
  let [user, setUser] = useState({
    name : 'adil'
  })

  

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>count is {count}</h1>
      <h1>name is {user.name} </h1>

      <button onClick={handleClick} >increment</button>
      <button onClick={() => {
        user.name = 'tina'
      }} >change name</button>
    </div>
  )
}

export default App
