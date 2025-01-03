import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    { name: 'Spa Treatment', price: '$100' },
    { name: 'Massage', price: '$80' },
    { name: 'Facial', price: '$70' },
    { name: 'Manicure', price: '$40' },
    { name: 'Pedicure', price: '$50' },
  ];
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
        <div>
          <h1 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Welcome to Our Spa
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Relax, Rejuvenate, and Refresh
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex justify-between items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Our Services
              <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={() => {
                        // Handle service selection here
                        console.log(`Selected service: ${service.name}`);
                      }}
                    >
                      {service.name} - {service.price}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex space-x-4">
            <Link
              to="/"
              className="group relative flex-1 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-110"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="group relative flex-1 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out transform hover:scale-110"
            >
              Our Services
            </Link>

            <Link
              to="/booking"
              className="group relative flex-1 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out transform hover:scale-110"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-center text-sm text-gray-500">
            Experience luxury and tranquility at our state-of-the-art spa facilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;