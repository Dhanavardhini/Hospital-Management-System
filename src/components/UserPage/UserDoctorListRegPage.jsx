import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserDoctorListRegPage.css";
import { ArrowBack } from "@mui/icons-material";

export default function UserDoctorListRegPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // id: "",
    patientName: "",
    age: "",
    gender: "",
    phone: "",
    doctorName: "",
    specialty: "",
    availability: "",
    symptoms: "",
    appointmentDate: "",
    appointmentTime: "",
    paymentMethod: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (
        // !formData.id ||
         !formData.patientName || !formData.age || !formData.gender || !formData.phone || !formData.doctorName || 
        !formData.specialty || !formData.availability || !formData.symptoms || !formData.appointmentDate || 
        !formData.appointmentTime || !formData.paymentMethod) {
      alert("Your request has been submitted. Please wait for approval!");
      navigate("/doctors-list");
      return;
    }

    alert("Your request has been submitted. Please wait for approval!");
    navigate("/doctors-list"); // Navigate after submission
  };

  return (
    <div className="UserDoctorListRegPage-container">
      <div className="form-page-container">
        {/* Back Button */}
        <button className="back-btn-1" onClick={() => navigate("/doctors-list")}>
          <ArrowBack className="back-icon" /> Back
        </button>

        <div className="form-container">
          <h2 className="UserDoctorListRegPage-title">Doctor Appointment Booking</h2>
          <form onSubmit={handleSubmit} className="appointment-reg-form">
            {/* <div className="form-group">
              <label>ID</label>
              <input type="text" name="id" placeholder="Enter ID" onChange={handleChange} required />
            </div> */}

            <div className="form-group">
              <label>Patient Name</label>
              <input type="text" name="patientName" placeholder="Enter Patient Name" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input type="number" name="age" placeholder="Enter Age" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select name="gender" onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="Enter Phone Number" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Doctor Name</label>
              <input type="text" name="doctorName" placeholder="Enter Doctor's Name" onChange={handleChange} required />
            </div>

            {/* <div className="form-group">
              <label>Specialist</label>
              <input type="text" name="specialty" placeholder="Enter Specialist (e.g., Cardiologist)" onChange={handleChange} required />
            </div> */}

            <div className="form-group">
              <label>Availability</label>
              <select name="availability" onChange={handleChange} required>
                <option value="">Select Available Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>

            <div className="form-group">
              <label>Symptoms</label>
              <textarea name="symptoms" placeholder="Describe Symptoms" rows="3" onChange={handleChange} required></textarea>
            </div>

            <div className="form-group">
              <label>Appointment Date</label>
              <input type="date" name="appointmentDate" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Appointment Time</label>
              <input type="time" name="appointmentTime" onChange={handleChange} required />
            </div>

            {/* <div className="form-group">
              <label>Payment Method</label>
              <select name="paymentMethod" onChange={handleChange} required>
                <option value="">Select Payment Method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Cash">Cash</option>
              </select>
            </div> */}

            <button type="submit" className="submit-btn" >Book Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
}
