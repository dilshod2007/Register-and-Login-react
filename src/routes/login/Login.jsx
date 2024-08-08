import React, { useState } from 'react';
import axios from "../../api/axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../login/Login.css";
import sms from "../../assets/sms.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUserLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when request starts

    try {
      const response = await axios.post("auth/login", { email, password });
      if (response.status === 201) {
        alert("User logged in successfully");
        localStorage.setItem("token", response.data.access_token);
        navigate("/profile");
      }
    } catch (error) {
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false); // Set loading to false when request completes
    }
  };

  return (
    <div className="login-form">
      <div className="text">
        LOGIN
      </div>
      <form className='form' onSubmit={handleUserLogin}>
        <div className="field">
          <div className="fas fa-envelope"></div>
          <input required
            type="email"
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading} // Disable input when loading
          />
        </div>
        <div className="field">
          <div className="fas fa-lock"></div>
          <input required
            type="password"
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading} // Disable input when loading
          />
        </div>
        <button
          className='form__button'
          type='submit'
          disabled={loading} // Disable button when loading
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="link">
          Not a member?
          <Link to="/register">Register now</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
