/**
 * Rumesh Guest Page - React App
 * 
 * DEPLOYMENT INSTRUCTIONS:
 * 1. npm install
 * 2. npm run deploy
 * 
 * This will build and deploy to GitHub Pages with custom domain support.
 */

import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Home Page Component
function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleWelcome = () => {
    alert('Welcome Rumesh!');
  };

  return (
    <div className="page-container">
      <h1 className="title">Rumesh Guest Page</h1>
      <p className="subtitle">React app hosted on GitHub Pages + Custom Domain</p>
      
      <div className="button-group">
        <button className="button primary" onClick={handleIncrement}>
          Click Me
        </button>
        <button className="button secondary" onClick={handleWelcome}>
          Say Welcome
        </button>
      </div>
      
      <p className="counter">Counter: {count}</p>
    </div>
  );
}

// About Page Component
function About() {
  return (
    <div className="page-container">
      <h1 className="title">About</h1>
      <div className="about-content">
        <p>
          Welcome to the Rumesh Guest Page! This is a simple React application 
          demonstrating deployment on GitHub Pages with a custom domain.
        </p>
        <p>
          Built with React and hosted at <strong>rumeshguest.page</strong>
        </p>
        <div className="tech-stack">
          <h3>Tech Stack:</h3>
          <ul>
            <li>⚛️ React 18</li>
            <li>🛣️ React Router DOM</li>
            <li>🎨 Pure CSS Styling</li>
            <li>🚀 GitHub Pages Hosting</li>
            <li>🌐 Custom Domain (Name.com)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Navigation Component
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">🏠 Rumesh</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2025 Rumesh Guest Page | Hosted on GitHub Pages</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
