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

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify({ username: formData.username, password: hashedPassword }));
    alert("Account created successfully!");

    // Redirect to login page
    window.location.href = "/login";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-red-600 mb-6 text-center">Signup</h2>
        
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
          Signup
        </button>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-red-600 hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
