import React from "react";

import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Navbar/Footer";
import Aboutus from "./Components/Aboutus/Aboutus";
import ContactUs from "./Components/ContactUs/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Properties from "./Components/PropertiesPage/Properties";
import Property from "./Components/PropertiesPage/Property";

import "@radix-ui/themes/styles.css";

function App() {
  return (
    <BrowserRouter>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<Property />} />
        </Routes>
        <Footer />
      
    </BrowserRouter>
  );
}

export default App;
