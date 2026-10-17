import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from './features/counterSlice';


const App = () => {
   const [inpVal, setInpVal] = useState(0);
  const dispatch = useDispatch();

  const {count} = useSelector((store) => store.counter )
  
  return (
    <div>
      <h1>my count is {count}</h1>
      <button onClick={() => dispatch(increment())} >increment</button>
      <button onClick={() => dispatch(decrement())} >decrement</button> <br /> <br />
      <input onChange={(e) => setInpVal(e.target.value) }
      type="text" placeholder='enter count' />
      <button onClick={() => dispatch(incrementByValue(inpVal))} >increment by value</button>
    </div>
  )
}

export default App
