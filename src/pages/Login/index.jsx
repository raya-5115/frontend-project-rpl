import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/auth/login', {email, password})
    .then(result => {
      console.log(result)
      navigate('/home')
    })
    .catch(err => {
      console.log(err)
      setError(err.response?.data?.message || "Login failed")
    })
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative bg-gradient-to-b from-purple-800 to-purple-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Back.jpeg')" }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-opacity-10 rounded-xl shadow-xl p-4 max-w-xs w-full backdrop-blur-lg border border-white border-opacity-20">
        <h2 className="text-center text-2xl font-bold text-white mb-4">Login</h2>
        
        {error && <div className="mb-4 p-2 bg-red-500 bg-opacity-20 text-red-100 rounded-lg text-center">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <input
              className="w-full p-2 rounded-lg  bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="absolute right-3 top-2 text-white font-normal not-italic">👤</i>
          </div>
          
          <div className="mb-4 relative">
            <input
              className="w-full p-2 rounded-lg  bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="absolute right-3 top-2 text-white font-normal not-italic">🔒</i>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Login
          </button>
          
          <div className="mt-4 text-center text-white text-sm">
            Belum punya akun? <a href="/register" className="text-purple-300 hover:text-purple-200">Daftar disini</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;