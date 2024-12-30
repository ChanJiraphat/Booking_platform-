import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api');
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching data from the backend:', error);
      }
    };

    fetchMessage();
  }, []);

  return <h1>{message}</h1>;
};

export default Home;