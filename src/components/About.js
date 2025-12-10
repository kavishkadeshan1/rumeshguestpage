import React from 'react';

function About() {
  return (
    <div className="page-container">
      <div className="content-box">
        <h1 className="page-title">About This Project</h1>
        
        <div className="about-content">
          <p className="about-text">
            This is a simple React application created to demonstrate GitHub Pages deployment 
            with a custom domain.
          </p>
          
          <h2 className="section-title">Technologies Used</h2>
          <ul className="tech-list">
            <li>⚛️ React 18</li>
            <li>🔀 React Router DOM</li>
            <li>🎨 Custom CSS Styling</li>
            <li>🚀 GitHub Pages Deployment</li>
            <li>🌐 Custom Domain (rumeshguest.page)</li>
          </ul>
          
          <h2 className="section-title">Features</h2>
          <ul className="tech-list">
            <li>✅ Multi-page navigation</li>
            <li>✅ Interactive counter</li>
            <li>✅ Alert functionality</li>
            <li>✅ Responsive design</li>
            <li>✅ Modern UI/UX</li>
          </ul>
          
          <div className="info-box">
            <p>🎯 Built for testing GitHub Pages with custom domain integration.</p>
            <p>💻 Fully responsive and production-ready.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
