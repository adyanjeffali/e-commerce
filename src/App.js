import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Boutique from './pages/Boutique';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/boutique" element={<Boutique />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;