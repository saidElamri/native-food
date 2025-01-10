import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import FoodDetailPage from './pages/FoodDetailPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<FoodDetailPage />} /> {/* Updated path */}
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
