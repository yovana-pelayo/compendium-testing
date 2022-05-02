import Home from './views/Home';
import React from 'react';

export default function App() {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh' }}>
      <h1 aria-label="header" style={{ color: 'green' }}>
        Futurama Page
      </h1>

      <Home style={{ color: 'green' }} />
    </div>
  );
}
