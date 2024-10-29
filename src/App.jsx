import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
// Import pages and components
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Checkout from './pages/Checkout';
import AdminDashboard from './pages/AdminDashboard';
import Signup from './pages/SignUp';
import Login from './pages/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Store authentication status
  };

  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page: accessible to everyone */}
        <Route path="/" element={<Home />} />
        
        {/* Redirect to Home if logged in, else show Signup */}
        <Route 
          path="/signup" 
          element={!isAuthenticated ? <Signup /> : <Navigate to="/" />} 
        />

        {/* Login route: if authenticated, redirect back to checkout if accessed during checkout */}
        <Route 
          path="/login" 
          element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} 
        />

        {/* Product Details page is accessible to everyone */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Checkout route: only accessible if authenticated */}
        <Route 
          path="/checkout" 
          element={isAuthenticated ? <Checkout /> : <Navigate to="/login" />} 
        />

        {/* Admin route: only accessible if authenticated */}
        <Route 
          path="/admin" 
          element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" />} 
        />
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  );
}

export default App;
