import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ShowProvider } from './context/ShowContext';

render(
  <React.StrictMode>
    <ShowProvider>
      <App />
    </ShowProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
