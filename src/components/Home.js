import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleWelcome = () => {
    alert('Welcome Rumesh! 👋');
  };

  return (
    <div className="page-container">
      <div className="content-box">
        <h1 className="main-title">Rumesh Guest Page</h1>
        <p className="subtitle">React app hosted on GitHub Pages + Custom Domain</p>
        
        <div className="button-group">
          <button className="primary-button" onClick={handleClick}>
            🔢 Click Me
          </button>
          
          <button className="secondary-button" onClick={handleWelcome}>
            👋 Say Welcome
          </button>
        </div>
        
        <div className="counter-display">
          <p className="counter-label">Button Clicks:</p>
          <p className="counter-value">{count}</p>
        </div>
        
        <div className="info-section">
          <p className="info-text">
            This is a fully functional React application with routing, 
            deployed on GitHub Pages with a custom domain.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
