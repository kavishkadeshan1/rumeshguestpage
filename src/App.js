import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1 className="title">Rumesh Guest Page</h1>
      <p className="subtitle">React site hosted on GitHub Pages + Name.com</p>
      <button className="button" onClick={handleClick}>
        Click Me
      </button>
      <p className="counter">Counter: {count}</p>
    </div>
  );
}

export default App;
