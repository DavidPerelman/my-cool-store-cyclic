import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const getData = async () => {
    await fetch('/api')
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
