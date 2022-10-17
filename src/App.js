import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import { Container} from '@material-ui/core';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Drawer from './components/Drawer/Drawer';
import Display from './components/Display/Display';
import Location from './components/Location/Location';

const App = () => {

  const [isOpen, toggleOpen] = useState(false);



  const openCloseDrawer = () =>{
    toggleOpen(!isOpen);
    console.log(isOpen);
  }


  return (
    <Container>
    <BrowserRouter>

      <Drawer toggle={isOpen} opener={openCloseDrawer} />
      <Navbar opener={openCloseDrawer} />

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/location' element={<Location/>} />
      <Route path='/display' element={<Display/>} />

      </Routes>

  </BrowserRouter>
  </Container>
  );
}

export default App;
