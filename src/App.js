// src/App.js
import React from 'react';
import Calculator from './components/Calculator'; // Make sure to use the correct path to Calculator.js
import Quotes from './components/Quotes';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quotes />}> </Route>
        <Route path="/calculator" element={<Calculator />}> </Route>
        <Route path="/home" element={<Home />}> </Route>
      </Routes>
    </BrowserRouter>
    </div>


    
);

export default App;
