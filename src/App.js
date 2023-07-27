// src/App.js
import React from 'react';
import Calculator from './components/Calculator'; // Make sure to use the correct path to Calculator.js
import Quotes from './components/Quotes';

const App = () => (
  <div>
    <div><Quotes /></div>
    <Calculator />
  </div>
);

export default App;
