import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/Navbar/Footer';
import Aboutus from './Components/aboutus_page/Aboutus';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
   <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/aboutus" element={<Aboutus />} />
    </Routes>
    
    
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
