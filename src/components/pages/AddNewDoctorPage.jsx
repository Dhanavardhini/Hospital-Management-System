import React from "react";
import "../styles/AddNewDoctorPage.css";
import AdSidenav from "./AdSidenav";

export default function AddNewDoctorPage() {
  return (
    <>
      <AdSidenav />
      <div className="add-new-doctor-page">
        <div className="form-container-1">
          <h2 className="form-title">Add New Doctor</h2>

          <form className="doctor-form">
            <div className="form-group">
              <label>Doctor Name</label>
              <input type="text" placeholder="Enter doctor's full name" required />
            </div>

            <div className="form-group">
              <label>Specialization</label>
              <input type="text" placeholder="Enter specialization (e.g., Cardiologist)" required />
            </div>

            <div className="form-group">
              <label>Years of Experience</label>
              <input type="number" placeholder="Enter experience in years" required />
            </div> 
            
            <div className="form-group">
              <label>Email Id</label>
              <input type="email" placeholder="Enter the Email Id" required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="passward" placeholder="Enter the Password" required />
            </div>  
            
            <div className="form-group">
              <label>Contact No</label>
              <input type="number" placeholder="Enter the Phone number" required />
            </div>

            <div className="form-group">
              <label>Bio</label>
              <textarea placeholder="Enter doctor's bio or details" rows="4" required></textarea>
            </div>

            <div className="form-group">
              <label>Profile Image</label>
              <input type="file"  accept="image/*" />
            </div>

            <button type="submit" className="submit-btn">Add Doctor</button>
          </form>
        </div>
      </div>
    </>
  );
}
