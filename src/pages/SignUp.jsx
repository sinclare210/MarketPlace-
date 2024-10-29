import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hash the password before storing
    const hashedPassword = bcrypt.hashSync(formData.password, 10);

    // Store user data in localStorage (you might use a backend API instead)
    localStorage.setItem('user', JSON.stringify({ username: formData.username, password: hashedPassword }));
    alert("Account created successfully!");

    // Redirect to login page or home page
    window.location.href = "/login";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">Signup</h2>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Username"
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
