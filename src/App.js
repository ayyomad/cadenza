import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import ExplorePage from './components/ExplorePage';
import About from './components/About';
import Contact from './components/Contact';
import BuyInstruments from './components/BuyInstruments'; 


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/explore" element={<ExplorePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<BuyInstruments />} />


        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;