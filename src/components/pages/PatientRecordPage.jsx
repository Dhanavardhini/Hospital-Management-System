import React from "react";
import AdSidenav from "./AdSidenav";
import "../styles/ManageDoctorPage.css";

export default function PatientRecordPage() {
  const patientList = [
    {
      id: 1,
      patientId: "P101",
      name: "Alice Johnson",
      age: 30,
      gender: "Female",
      diagnosis: "Diabetes",
      doctor: "Dr. John Smith",
      contact: "+1 234 567 890",
      admissionDate: "2025-02-10", availability: "Tue-Thu",
      time:"11.00 A.M"
    },
    {
      id: 2,
      patientId: "P102",
      name: "Robert Williams",
      age: 45,
      gender: "Male",
      diagnosis: "Hypertension",
      doctor: "Dr. Emily Johnson",
      contact: "+1 987 654 321",
      admissionDate: "2025-02-15", availability: "Tue-Thu",
      time:"11.00 A.M"
    },
    {
      id: 3,
      patientId: "P103",
      name: "Sophia Martinez",
      age: 29,
      gender: "Female",
      diagnosis: "Fracture",
      doctor: "Dr. Michael Brown",
      contact: "+1 543 210 987",
      admissionDate: "2025-02-20", availability: "Tue-Thu",
      time:"11.00 A.M"
    },
  ];

  return (
    <>
      <AdSidenav />
      <div className="manage-doctor-container">
        <h2>Patient Records</h2>
        <div className="table-wrapper">
          <table className="doctor-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Diagnosis</th>
                <th>Doctor</th>
                <th>Contact</th>
                <th>Admission Date</th> <th>Availability</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {patientList.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.patientId}</td>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.diagnosis}</td>
                  <td>{patient.doctor}</td>
                  <td>{patient.contact}</td>
                  <td>{patient.admissionDate}</td>
                  <td>{patient.availability}</td> 
                  <td>{patient.time}</td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
