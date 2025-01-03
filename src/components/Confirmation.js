import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || {};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Booking Confirmation</h1>
      {bookingDetails ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <p className="font-bold">Thank you for your booking!</p>
          <h2 className="text-xl mt-4 mb-2">Booking Details:</h2>
          <ul className="list-disc list-inside">
            <li>Name: {bookingDetails.name}</li>
            <li>Date: {bookingDetails.date}</li>
            <li>Time: {bookingDetails.time}</li>
            {/* Add more booking details as needed */}
          </ul>
          <p className="mt-4">A confirmation email has been sent to your registered email address.</p>
        </div>
      ) : (
        <p className="text-red-500">No booking details available. Please return to the booking page and try again.</p>
      )}
      <button 
        onClick={() => window.history.back()} 
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Booking
      </button>
    </div>
  );
};

export default Confirmation;