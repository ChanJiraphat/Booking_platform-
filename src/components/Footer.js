import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {currentYear} Booking App. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/terms" className="hover:text-gray-300">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;