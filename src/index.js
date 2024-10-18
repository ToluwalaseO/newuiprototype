import React from 'react'; // Correct import for React
import ReactDOM from 'react-dom/client'; // Ensure correct import for ReactDOM
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Removed the semicolon */}
  </React.StrictMode>
);

reportWebVitals();