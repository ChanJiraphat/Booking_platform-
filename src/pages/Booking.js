import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [formData, setFormData] = useState({ date: '', service: '', time: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    navigate('/confirmation', { state: { bookingDetails: formData } });
  };
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Book Your Appointment
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="date" className="sr-only">Date</label>
              <input
                id="date"
                name="date"
                type="date"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Select Date"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="time" className="sr-only">Time</label>
              <input
                id="time"
                name="time"
                type="time"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Select Time"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="service" className="sr-only">Service</label>
              <select
                id="service"
                name="service"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                onChange={handleChange}
              >
                <option value="">Select a Service</option>
                <option value="spa">Spa Treatment</option>
                <option value="massage">Massage</option>
                <option value="facial">Facial</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
