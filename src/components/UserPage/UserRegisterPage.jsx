import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Typography } from "@mui/material";
import "../styles/UserRegisterPage.css"; 

export default function UserRegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }

    alert("Registration successful!");
    navigate("/userlogin");
  };

  return (
    <div className="register-container">
      <Card className="register-card">
        <Typography variant="h5" className="register-title">
          User Registration
        </Typography>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              className="input-field"
              placeholder="Enter Username"
              type="text"
              name="username"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="input-field"
              placeholder="Enter Email"
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="input-field"
              placeholder="Enter Password"
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="register-button" fullWidth>
            Register
          </Button>

          <Typography className="login-link">
            Already have an account?{" "}
            <span  className="login-link-1" onClick={() => navigate("/userlogin")}>Login here</span>
          </Typography>
        </form>
      </Card>
    </div>
  );
}


