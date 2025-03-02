import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LogoutIcon from "@mui/icons-material/Logout";

import "../styles/AdSidenav.css";

export default function AdSidenav() {
  const navigate = useNavigate();

  // Sidebar Items
  const sidebarItems = [
    { icon: <DashboardIcon />, text: "Dashboard", path: "/addashboard" },
    { icon: <LocalHospitalIcon />, text: "Add New Doctor", path: "/add-new-doctor" },
    { icon: <ManageAccountsIcon />, text: "Manage Doctors", path: "/manage-doctors" },
    { icon: <VisibilityIcon />, text: "Patient Records", path: "/patient-records" },
    { icon: <EventNoteIcon />, text: "Appointment History", path: "/appointment-history" },
];
  return (
    <div className="adsidenav-container">
      {/* Admin Panel Title */}
      <Typography variant="h4" className="adsidenav-title">
        Admin Panel
      </Typography>

      {/* Sidebar Sections */}
      {sidebarItems.map((item, index) => (
        <div key={index} className="sidebar-section" onClick={() => navigate(item.path)}>
            <div className="sidebar-icon">{item.icon}</div>
            <Typography variant="h6" className="sidebar-text">
                {item.text}
            </Typography>
        </div>
      ))}


      {/* Logout */}
      <div className="sidebar-section logout" onClick={() => { alert("You have been logged out."); navigate("/"); }}>
        <LogoutIcon className="sidebar-icon" />
        <Typography variant="h6" className="sidebar-text">
          Logout
        </Typography>
      </div>
    </div>
  );
}
