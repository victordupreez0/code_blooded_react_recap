import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import BusinessPage from './components/BusinessPage';
import ContactPage from './components/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Services" element={<ServicesPage />} />
            <Route path="/Business" element={<BusinessPage />} />
            <Route path="/Contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;