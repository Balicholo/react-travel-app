// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import AuthHeader from './components/AuthHeader';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import FindVanPage from './components/FindVanPage';
import AboutPage from './components/AboutPage';
import SignInPage from './components/SignInPage';
import ContactPage from './components/ContactPage';
import './App.css';
import VanDetailsPage from './components/VanDetailsPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <AppRoutes />
      </div>
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();

  const isAuthPage = location.pathname === '/sign-in' || location.pathname === '/contact';

  return (
    <>
      {isAuthPage ? <AuthHeader /> : <Header />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/find-van' element={<FindVanPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/van-details/:id' element={<VanDetailsPage />} /> {/* Add this route */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
