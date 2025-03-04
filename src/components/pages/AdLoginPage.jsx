import React, { useState } from "react";
import {  Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/AdLoginPage.css";

export function AdLoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const validEmail = "Admin@gmail.com";
    const validPassword = "admin123";

    if (formData.email === validEmail && formData.password === validPassword) {
      alert("Admin Login successful!");
      navigate("/addashboard");
    } else {
      alert("Insert the correct Email and Password");
    }
  };

  return (
    <div className="login-container-1">
      <Card className="login-card">
        <Typography variant="h5" className="login-title">
          Admin Login
        </Typography>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label" >Email Id</label>
            <input  className="input-1"
              placeholder="Enter Email"
              type="email"
              name="email" required
              onChange={handleChange} />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="input-2"
              placeholder="Enter Password"
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>


          <Button type="submit" className="login-button" fullWidth>
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
}
