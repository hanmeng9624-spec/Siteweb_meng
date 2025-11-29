import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// In a real build environment, we rely on the bundler (Vite) to handle imports.
// The index.html handles the CSS (Tailwind).

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);