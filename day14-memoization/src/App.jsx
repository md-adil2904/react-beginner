import React, { useCallback, useMemo } from "react";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from "react";

const App = () => {
  console.log("app rendering");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({ name: "adil", id: 1 });

  let calculation = useMemo(() => {
    console.log("calculation running")
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  }, []);

  const greet = useCallback(() => {
    console.log("hey I am adil");
  }, []);

  return (
    <div>
      <h1>count - {count}</h1>
      <h1>name is {users.name}</h1>
      <h2>calculatin is {calculation}</h2>

      <Home greet={greet} />
      <About greet={greet} />

      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setUsers({ ...users, name: "amit" })}>
        change name
      </button>
    </div>
  );
};

export default App;
