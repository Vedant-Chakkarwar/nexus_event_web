import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './tempnav.js';
import Aboutus from './Aboutus'; 
import Footer from './Footer.js';
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Define routes using the 'element' prop for rendering components */}
          <Route path="/about" element={<Aboutus />} />
          {/* Add more routes for other pages using the same pattern */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
