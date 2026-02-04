import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PetList from './pages/PetList';
import PetProfile from './pages/PetProfile';
import ClientProfile from './pages/ClientProfile';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<PetList />} />
          <Route path="/pet/:id" element={<PetProfile />} />
          <Route path="/profile" element={<ClientProfile />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;