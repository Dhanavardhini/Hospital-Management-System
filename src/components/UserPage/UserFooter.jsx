import React from "react";
import "../styles/UserFooter.css";

export default function UserFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* ✅ Left: Project Info */}
        <div className="footer-section">
          <h3>Hospital Management System</h3>
          <p>Seamlessly manage patients, doctors, and appointments.</p>
        </div>

        {/* ✅ Right: Copyright */}
        <div className="footer-section">
          <p>© {new Date().getFullYear()} Hospital Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
