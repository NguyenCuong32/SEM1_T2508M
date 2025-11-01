import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Couter, { ChangeColor } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Couter />
    <ChangeColor/>
  </React.StrictMode>
);
