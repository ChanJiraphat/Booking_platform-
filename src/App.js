import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Services from './components/Services';
import User from './pages/User';
import Register from './pages/Register';
import './App.css';
import { FaHome, FaCalendarAlt, FaBars, FaUser, FaSearch } from 'react-icons/fa';

// Add this new CSS class
const backgroundStyle = {
  backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function AppContent() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Rest of the component... */}
      <div className="absolute inset-0 z-0" style={backgroundStyle}></div>
      <div className="absolute inset-0 bg-amber-900 opacity-40 z-10"></div>
      <div className="relative z-20 flex flex-col min-h-screen">
        <header className="bg-amber-100 bg-opacity-90 shadow-md fixed top-0 left-0 right-0 z-30">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-green-800">Baan Sabai Dee นวดเพื่อสุขภาพ</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-green-700 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 bg-amber-50"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-700" />
            </div>
            <button onClick={() => navigate('/')} className="text-green-800 hover:text-green-600">
              <FaHome size={20} />
            </button>
            <button onClick={() => navigate('/booking')} className="text-green-800 hover:text-green-600">
              <FaCalendarAlt size={20} />
            </button>
            <button onClick={() => navigate('/user')} className="text-green-800 hover:text-green-600">
              <FaUser size={20} />
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green-800">
              <FaBars size={24} />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-amber-100 py-2">
            <div className="container mx-auto px-4 space-y-2">
              <Link to="/" className="block py-2 text-green-800 hover:text-green-600">Home</Link>
              <Link to="/booking" className="block py-2 text-green-800 hover:text-green-600">Booking</Link>
              <Link to="/user" className="block py-2 text-green-800 hover:text-green-600">Profile</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 pt-20 pb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/user" element={<User />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <footer className="bg-amber-100 bg-opacity-90">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-green-800">About Us</h3>
              <p className="text-sm text-green-700">Baan Sabai Dee offers luxurious spa experiences for ultimate relaxation.</p>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-green-800">Quick Links</h3>
              <ul className="text-sm text-green-700">
                <li><Link to="/services" className="hover:text-green-600">Services</Link></li>
                <li><Link to="/about" className="hover:text-green-600">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-green-800">Contact Us</h3>
              <p className="text-sm text-green-700">123 Spa Street, Relaxville<br />Phone: (123) 456-7890<br />Email: info@baansabaidee.com</p>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-2 text-green-800">Follow Us</h3>
              <div className="flex space-x-4">
                <button onClick={() => window.open('https://facebook.com', '_blank')} className="text-green-700 hover:text-green-600">
                  <i className="fab fa-facebook"></i>
                </button>
                <button onClick={() => window.open('https://instagram.com', '_blank')} className="text-green-700 hover:text-green-600">
                  <i className="fab fa-instagram"></i>
                </button>
                <button onClick={() => window.open('https://twitter.com', '_blank')} className="text-green-700 hover:text-green-600">
                  <i className="fab fa-twitter"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-green-700">
            <p>&copy; 2023 Baan Sabai Dee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
);
}
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Booking from './pages/Booking';


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;