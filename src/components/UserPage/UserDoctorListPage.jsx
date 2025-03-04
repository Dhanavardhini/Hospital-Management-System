import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia, CardContent, Button, Typography } from "@mui/material";
import "../styles/UserDoctorListPage.css";
import doctorImg from "../../assets/img 1.jpg"; // Replace with your doctor images
import UserHeader from "./UserHeader";

// Sample Doctor Data
const doctors = [
    { id: 1, name: "Dr. John Doe", specialty: "Diabetes Specialist", image: doctorImg },
    { id: 2, name: "Dr. Sarah Lee", specialty: "Cardiologist", image: doctorImg },
    { id: 3, name: "Dr. Michael Brown", specialty: "Orthopedic Surgeon", image: doctorImg },
    { id: 4, name: "Dr. Emily Smith", specialty: "Dermatologist", image: doctorImg },
    { id: 5, name: "Dr. David Wilson", specialty: "Neurologist", image: doctorImg },
    { id: 6, name: "Dr. Olivia Taylor", specialty: "General Physician", image: doctorImg },
    { id: 7, name: "Dr. Daniel Martinez", specialty: "Pediatrician", image: doctorImg },
    { id: 8, name: "Dr. Sophia Anderson", specialty: "Gynecologist", image: doctorImg },
    { id: 9, name: "Dr. James Thomas", specialty: "ENT Specialist", image: doctorImg },
    { id: 10, name: "Dr. Isabella White", specialty: "Psychiatrist", image: doctorImg },
    { id: 11, name: "Dr. Matthew Harris", specialty: "Urologist", image: doctorImg },
    { id: 12, name: "Dr. Amelia Clark", specialty: "Oncologist", image: doctorImg },
    { id: 13, name: "Dr. William Lewis", specialty: "Endocrinologist", image: doctorImg },
    { id: 14, name: "Dr. Charlotte Walker", specialty: "Pulmonologist", image: doctorImg },
    { id: 15, name: "Dr. Benjamin Hall", specialty: "Nephrologist", image: doctorImg },
  ];
  

export default function UserDoctorListPage() {
  const navigate = useNavigate();

  // Function to handle appointment booking
  const handleBookAppointment = () => {
    // alert("Your appointment has been booked!");
    navigate("/doctors-list-reg");
  };

  // Function to handle appointment cancellation
  const handleCancel = () => {
    alert("Your appointment has been canceled!");
  };

  return (
    <>
      <UserHeader />
      <div className="userdoctorlistpage-container">
        <div className="userdoctorlistpage-container-1">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="doctor-card">
              <CardMedia component="img" height="200" image={doctor.image} alt={doctor.name} />
              <CardContent>
                <Typography variant="h6" className="doctor-name">{doctor.name}</Typography>
                <Typography variant="body1" className="doctor-specialty">{doctor.specialty}</Typography>
                <div className="button-container">
                  <Button
                    variant="contained"
                    color="primary"
                    className="book-btn"
                    onClick={handleBookAppointment}
                  >
                    Book Appointment
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="cancel-btn-1"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
