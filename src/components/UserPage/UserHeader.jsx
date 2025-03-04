import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Close, LocalHospital } from "@mui/icons-material"; // Import Hospital Icon
import "../styles/UserHeader.css";

export default function UserHeader() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State for Mobile Menu

  return (
    <header className="header">
      {/* ✅ Left: Project Title with Hospital Icon */}
      <div className="header-title">
        <LocalHospital className="hospital-icon" />
        Hospital Management  
      </div>

      {/* ✅ Hamburger Menu for Mobile (Hidden on Desktop) */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <Close /> : <Menu />}
      </div>

      {/* ✅ Navigation Menu (Always Visible on Desktop) */}
      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <span onClick={() => navigate("/UserDashboard")}>Home</span>
        <span onClick={() => navigate("/doctors-list")}>Doctors List</span>
        <span onClick={() => navigate("/view-appointments")}> View Appointments</span>
        {/* <span onClick={() => navigate("/medical-records")}>Medical Records</span> */}
        <span className="logout1" onClick={() => navigate("/")}>Logout</span>
      </nav>
    </header>
  );
}
