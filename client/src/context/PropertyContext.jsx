import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState(() => {
    const stored = localStorage.getItem('properties');
    return stored ? JSON.parse(stored) : null;
  });

  const fetchProperties = async () => {
    try {
      const response = await axios.post('/properties/getProperties', {
        domain: 'http://somedomain.com',
      });
      if (response.data) {
        setProperties(response.data);
        localStorage.setItem('properties', JSON.stringify(response.data));
      }
    } catch (error) {
      console.error('Failed to fetch properties');
    }
  };

  useEffect(() => {
    if (!properties) {
      fetchProperties();
    }
  }, []);

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
};

 
export const useProperty = () => useContext(PropertyContext);
