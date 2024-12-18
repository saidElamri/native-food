import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FoodDetailPage from './pages/FoodDetailPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<FoodDetailPage />} /> {/* Updated path */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
