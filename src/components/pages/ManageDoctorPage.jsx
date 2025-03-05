import React from "react";
import AdSidenav from "./AdSidenav";
import "../styles/ManageDoctorPage.css";

export default function ManageDoctorPage() {
  const doctorList = [
    {
      id: 1,
      doctorId: "D101",
      name: "Dr. John Smith",
      specialist: "Cardiologist",
      experience: "10 Years",
      email: "johnsmith@example.com",
      passward:"123",
      contact: "+1 234 567 890",
      availability: "Mon-Fri",
      time:"10.00 A.M"

      
    },
    {
      id: 2,
      doctorId: "D102",
      name: "Dr. Emily Johnson",
      specialist: "Dermatologist",
      experience: "8 Years",
      email: "emilyjohnson@example.com",
      passward:"123",
      contact: "+1 987 654 321",
      availability: "Tue-Thu",
      time:"11.00 A.M"

    },
    {
      id: 3,
      doctorId: "D103",
      name: "Dr. Michael Brown",
      specialist: "Orthopedic Surgeon",
      experience: "12 Years",
      email: "michaelbrown@example.com",
      passward:"123",
      contact: "+1 543 210 987",
      availability: "Mon-Wed",
      time:"11.00 A.M"
    },
  ];

  return (
    <>
      <AdSidenav />
      <div className="manage-doctor-container-manage">
        <h2>Doctor Management</h2>
        <div className="table-wrapper-manage">
          <table className="doctor-table-manage">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Doctor ID</th>
                <th>Name</th>
                <th>Specialist</th>
                <th>Experience</th>
                <th>Email</th> 
                <th>Passward</th>
                <th>Contact</th>
                <th>Availability</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {doctorList.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.id}</td>
                  <td>{doctor.doctorId}</td>
                  <td>{doctor.name}</td>
                  <td>{doctor.specialist}</td>
                  <td>{doctor.experience}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.passward}</td>
                  <td>{doctor.contact}</td>
                  <td>{doctor.availability}</td> 
                  <td>{doctor.time}</td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
