import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';


function VendingMachine() {
  return (
    <div className='VendingMachine'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/soda' element={<Soda />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/candy' element={<Candy />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default VendingMachine;