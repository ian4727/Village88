import React from 'react';
import ReactDOM from 'react-dom/client';
import Click from './components/Click';
import TestLifecycle from './components/Click';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Click></Click>
    <TestLifecycle/>
  </React.StrictMode>,
)
