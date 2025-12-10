import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';

/*
 * DEPLOYMENT INSTRUCTIONS:
 * 
 * 1. Install dependencies:
 *    npm install
 * 
 * 2. Deploy to GitHub Pages:
 *    npm run deploy
 * 
 * This will build and push to the gh-pages branch automatically.
 * Your site will be live at: https://rumeshguest.page
 * 
 * Note: The basename="" works for custom domains.
 * If using github.io subdomain, change to basename="/rumeshguestpage"
 */

function App() {
  return (
    <Router basename="">
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
