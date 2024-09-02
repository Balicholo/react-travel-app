import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { auth } from './components/SignInPages/firebase'; // Adjust the import path as needed
import Header from './components/Header';
import AuthHeader from './components/AuthHeader';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import FindVanPage from './components/FindVanPage';
import AboutPage from './components/AboutPage';
import Register from './components/SignInPages/register'; // Adjust the import path
import Profile from './components/SignInPages/profile'; // Adjust the import path
import Login from './components/SignInPages/login';
import VanDetailsPage from './components/VanDetailsPage';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe(); // Clean up subscription
  }, []);

  return (
    <Router>
      <div className='App'>
        <AppRoutes user={user} />
        <ToastContainer />
      </div>
    </Router>
  );
}

function AppRoutes({ user }) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login'|| location.pathname === '/register' || location.pathname === '/signin' || location.pathname === '/profile';

  return (
    <>
      {isAuthPage ? <AuthHeader /> : <Header />}
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/profile" /> : <HomePage />}
        />
        <Route path="/find-van" element={<FindVanPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/contact" element={user ? <Navigate to="/profile" /> : <Profile />} />
        <Route path="/login" element={user ? <Navigate to="/profile" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/profile" /> : <Register />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/van-details/:id" element={<VanDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
