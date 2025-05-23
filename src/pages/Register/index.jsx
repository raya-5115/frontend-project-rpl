import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState("")
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/auth/register', {name, email, password})
    .then(result => {
      console.log(result)
      navigate('/login')
    })
    .catch(err => {
      console.log(err)
      setError(err.response?.data?.message || "Registration failed")
    })
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Register</h2>
      {error && <div style={{ color: "red", marginBottom: "15px" }}>{error}</div>}
      <form onSubmit={handlesubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <button 
          type="submit"
          style={{ padding: "10px 15px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}
        >
          Register
        </button>
        <div style={{ marginTop: "15px" }}>
          Already have an account? <a href="/login" style={{ color: "#4CAF50" }}>Login</a>
        </div>
      </form>
    </div>
  )
};

export default Register;