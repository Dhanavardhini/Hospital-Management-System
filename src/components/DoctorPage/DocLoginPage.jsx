import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/DocLoginPage.css";

export default function DocLoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailid: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Field validation
    if (!formData.emailid || !formData.password) {
      alert("All fields are required!");
      return;
    }

    alert("Login successful!");
    navigate("/doctor-dashboard"); // ✅ Navigate to user dashboard
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <Typography variant="h5" className="login-title">
          Doctor Login
        </Typography>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Email Id</label>
            <input
              className="input-field"
              placeholder="Enter Email "
              type="text"
              name="emailid"
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

          <Button type="submit" className="login-button" fullWidth>
            Login
          </Button>

          
        </form>
      </Card>
    </div>
  );
}
