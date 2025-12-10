import React from 'react';
import Navbar from './components/restaurant/Navbar';
import HeroSection from './components/restaurant/HeroSection';
import About from './components/restaurant/About';
import Menu from './components/restaurant/Menu';
import SpecialDishes from './components/restaurant/SpecialDishes';
import Reviews from './components/restaurant/Reviews';
import Gallery from './components/restaurant/Gallery';
import Contact from './components/restaurant/Contact';
import Footer from './components/restaurant/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <About />
      <Menu />
      <SpecialDishes />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
