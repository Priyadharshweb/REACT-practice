import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Parent from './Props/Parent';
import Counter from './Counter/Counter';
import Task1 from './Session6/Task1';
import CompB from './Session7/CompB';
import CompA from './Session7/CompA';
import Task2 from './Session7/Task2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Parent/> */}
    {/* <Counter/>
    <Task1/> */}
    {/* <CompA/> */}
    <Task2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
