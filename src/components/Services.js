import React from 'react';

const Services = () => {
  const services = [
    {
      name: 'Spa Treatment',
      price: '$100',
      description: 'A luxurious full-body treatment to rejuvenate your mind and body.'
    },
    {
      name: 'Massage',
      price: '$80',
      description: 'A relaxing massage to relieve stress and tension.'
    },
    {
      name: 'Facial',
      price: '$70',
      description: 'A refreshing facial treatment to nourish and revitalize your skin.'
    },
    {
      name: 'Manicure',
      price: '$40',
      description: 'A pampering treatment for your hands and nails.'
    },
    {
      name: 'Pedicure',
      price: '$50',
      description: 'A soothing treatment for your feet and toenails.'
    }
  ];

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
              <p className="text-indigo-600 font-bold mt-2">{service.price}</p>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;