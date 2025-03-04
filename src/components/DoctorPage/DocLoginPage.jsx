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

    alert("Doctor Login successful!");
    navigate("/doctor-dashboard"); // ✅ Navigate to user dashboard
  };

  return (
    <div className="Doc-login-container">
      <Card className="Doc-login-card">
        <Typography variant="h5" className="Doc-login-title">
          Doctor Login
        </Typography>

        <form onSubmit={handleSubmit} className="Doc-login-form">
          <div className="Doc-form-group">
            <label className="Doc-form-label">Email Id</label>
            <input
              className="Doc-input-field"
              placeholder="Enter Email "
              type="text"
              name="emailid"
              required
              onChange={handleChange}
            />
          </div>

          <div className="Doc-form-group">
            <label className="Doc-form-label">Password</label>
            <input
              className="Doc-input-field"
              placeholder="Enter Password"
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="Doc-login-button" fullWidth>
            Login
          </Button>

          
        </form>
      </Card>
    </div>
  );
}