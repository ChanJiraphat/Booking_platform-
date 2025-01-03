import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

try {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Error rendering the app:', error);
  root.render(
    <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>
      <h1>Error rendering the app</h1>
      <p>{error.message}</p>
    </div>
  );
}
reportWebVitals();