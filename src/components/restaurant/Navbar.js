import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-600">
              Rumesh Guest
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Menu
            </button>
            <button onClick={() => scrollToSection('specials')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Specials
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Reviews
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Contact
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-all transform hover:scale-105">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
              About
            </button>
            <button onClick={() => scrollToSection('menu')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
              Menu
            </button>
            <button onClick={() => scrollToSection('specials')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
              Specials
            </button>
            <button onClick={() => scrollToSection('reviews')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
              Reviews
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
              Contact
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-center mx-3 my-2 bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
