import './index.sass';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppMain from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <AppMain />
  </React.StrictMode>
);


reportWebVitals();
