import React, { useState } from 'react';
import axios from "../../api/axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../register/Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUserRegister = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await axios.post("/users", { name, email, password, avatar });
      if (response.status === 201) {
        alert("User registered successfully");
        navigate("/login");
      }
    } catch (error) {
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className='login-form'>
      <div className='text'>
        <h1>Register</h1>
      </div>
      <form className='form' onSubmit={handleUserRegister}>
        <div className="field">
          <div className="fas fa-user"></div>
          <input required
            type="text"
            placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="field">
          <div className="fas fa-envelope"></div>
          <input required
            type="email"
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="field">
          <div className="fas fa-lock"></div>
          <input required
            type="password"
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="field">
          <div className="fas fa-image"></div>
          <input required
            type="url"
            placeholder='Enter your avatar URL'
            onChange={(e) => setAvatar(e.target.value)}
            disabled={loading}
          />
        </div>
        <button
          className='form__button'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
        <div className="link">
          Already a member?
          <Link to="/login">Login now</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
