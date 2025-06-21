import React, { useState } from 'react';
import axios from 'axios';
import { apiRequests } from './requests';

const ApiTester = () => {
  const [selected, setSelected] = useState(apiRequests[0]);
  const [response, setResponse] = useState(null);
  const [token, setToken] = useState('');

  const sendRequest = async () => {
    try {
      let headers = { ...selected.headers };

      // Replace {{token}} placeholder
      if (headers.Authorization?.includes('{{token}}') && token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const config = {
        method: selected.method,
        url: selected.url,
        headers,
        data: selected.body,
      };

      const res = await axios(config);
      setResponse(res.data);

      // Save token if returned on login
      if (selected.id === 'login' && res.data.token) {
        setToken(res.data.token);
      }
    } catch (err) {
      setResponse(err.response?.data || err.message);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h2>🔍 API Tester</h2>

      <label>Select Request: </label>
      <select
        value={selected.id}
        onChange={e => {
          const req = apiRequests.find(r => r.id === e.target.value);
          setSelected(req);
          setResponse(null);
        }}
      >
        {apiRequests.map(r => (
          <option key={r.id} value={r.id}>{r.name}</option>
        ))}
      </select>

      <div style={{ marginTop: 20 }}>
        <p><strong>Method:</strong> {selected.method}</p>
        <p><strong>URL:</strong> {selected.url}</p>
        <p><strong>Headers:</strong> <pre>{JSON.stringify(selected.headers, null, 2)}</pre></p>
        {selected.body && (
          <p><strong>Body:</strong> <pre>{JSON.stringify(selected.body, null, 2)}</pre></p>
        )}
        <button onClick={sendRequest}>Send Request</button>
      </div>

      {token && <p><strong>Token:</strong> {token}</p>}

      {response && (
        <div style={{ marginTop: 20 }}>
          <h3>📦 Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiTester;
