import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      storedUser && 
      storedUser.username === formData.username && 
      bcrypt.compareSync(formData.password, storedUser.password)
    ) {
      
      localStorage.setItem('isAuthenticated', true);
      onLogin(); // Update parent state
      navigate("/checkout"); // Navigate to home page after login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-red-600 mb-6 text-center">Login</h2>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-black mb-2">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Username"
            required
            className="w-full px-4 py-2 bg-gray-200 text-black rounded-md focus:ring focus:ring-red-500 focus:outline-none"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-black mb-2">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-2 bg-gray-200 text-black rounded-md focus:ring focus:ring-red-500 focus:outline-none"
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
        >
          Login
        </button>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-red-600 hover:underline">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
