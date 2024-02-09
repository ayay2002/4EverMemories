import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [photographer, setPhotographer] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    try {
      const response = await axios.post('/login', {
        email,
        password,
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setUser({ email: '', password: '' });
        navigate('/dashboard/user');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loginPhotographer = async (e) => {
    e.preventDefault();
    const { email, password } = photographer;
    try {
      const response = await axios.post('/login', {
        email,
        password,
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setPhotographer({ email: '', password: '' });
        navigate('/dashboard/photographer');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
      <h3 className="form-header">User Login</h3>
        <form onSubmit={loginUser}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email..."
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password..."
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button type="submit">Login as User</button>
        </form>
      </div>
      <div className="login-form">
      <h3 className="form-header">Photographer Login</h3>
        <form onSubmit={loginPhotographer}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email..."
            value={photographer.email}
            onChange={(e) => setPhotographer({ ...photographer, email: e.target.value })}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password..."
            value={photographer.password}
            onChange={(e) => setPhotographer({ ...photographer, password: e.target.value })}
          />
          <button type="submit">Login as Photographer</button>
        </form>
      </div>
    </div>
  );
}
