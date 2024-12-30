// src/pages/Booking.js
import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({ date: '', service: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" name="date" onChange={handleChange} required />
      </label>
      <label>
        Service:
        <input type="text" name="service" onChange={handleChange} required />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default Booking;
