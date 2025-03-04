import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia, CardContent, Button, Typography } from "@mui/material";
import "../styles/DocListPage.css";
import DocHeader from "../doctor/DocHeader";
import docImage from "../../assets/img 1.jpg"


const Doctors = [
  { id: 1, name: "John Doe", reason: "Diabetes Checkup", image: docImage },
  { id: 2, name: "Emily Johnson", reason: "Routine Health Check", image: docImage },
  { id: 3, name: "Michael Brown", reason: "Heart Specialist Consultation", image: docImage },
  { id: 4, name: "Sarah Williams", reason: "Skin Allergy Treatment", image: docImage },
  { id: 5, name: "Daniel Lee", reason: "Annual Physical Exam", image: docImage },
  { id: 6, name: "Olivia Martinez", reason: "High Blood Pressure", image: docImage },
  { id: 7, name: "James Anderson", reason: "Eye Checkup", image: docImage },
  { id: 8, name: "Sophia Thomas", reason: "Back Pain Consultation", image: docImage },
  { id: 9, name: "William Scott", reason: "Dental Checkup", image: docImage},
  { id: 10, name: "Isabella Moore", reason: "Thyroid Test", image: docImage},
  { id: 11, name: "Benjamin Harris", reason: "Cholesterol Screening", image:docImage},
  { id: 12, name: "Charlotte White", reason: "Migraine Treatment", image: docImage },
  { id: 13, name: "Alexander Martin", reason: "Allergy Test", image: docImage },
  { id: 14, name: "Mia Robinson", reason: "Asthma Checkup", image: docImage},
  { id: 15, name: "Ethan Walker", reason: "Depression Counseling", image: docImage },
];


export default function DocListPage() {
  const navigate = useNavigate();

 
  const handleAccept = (name) => {
    alert(`Appointment for ${name} Accepted ✅`);
  };

  const handleReject = (name) => {
    alert(`Appointment for ${name} Rejected ❌`);
  };

  return (
    <>
      <DocHeader />
      <div className="doclist-container">
        <div className="doclist-grid">
          {Doctors.map((user) => (
            <Card key={user.id} className="doc-card">
              <CardMedia component="img" height="200" image={user.image} alt={user.name} />
              <CardContent>
                <Typography variant="h6" className="doc-name">{user.name}</Typography>
                <Typography variant="body2" className="doc-reason">{user.reason}</Typography>
                
                {/* ✅ Buttons in a single row */}
                <div className="button-group">
                  <Button
                    variant="contained"
                    color="success"
                    className="accept-btn"
                    onClick={() => handleAccept(user.name)}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    className="reject-btn"
                    onClick={() => handleReject(user.name)}
                  >
                    Reject
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
