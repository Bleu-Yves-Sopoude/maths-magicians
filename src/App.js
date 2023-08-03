// src/App.js
import React from 'react';
import Calculator from './components/Calculator'; // Make sure to use the correct path to Calculator.js
import Quotes from './components/Quotes';
import Home from './components/Home';
import Navbar from'./components/Navbar';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

const App = () => (

  
 

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}> </Route>
        <Route path="/calculator" element={<Calculator />}> </Route>
        <Route path="/quote" element={<Quotes />}> </Route>
      </Routes>
    </BrowserRouter>
    


    
);

export default App;
