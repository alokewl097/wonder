import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error fetching API'));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>React + Express Fullstack App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
