import React from "react";
import "../styles/UserViewAppPage.css";
import UserHeader from "./UserHeader";

export default function UserViewAppPage() {
  // Sample Data (You can replace this with dynamic data)
  const appointments = [
    { id: 1, patientName: "John Doe", age: 30, gender: "Male", phone: "9876543210", symptoms: "Fever", appointmentDate: "2025-03-05", appointmentTime: "10:00 AM", doctor: "Dr. Smith" },
    { id: 2, patientName: "Alice Smith", age: 25, gender: "Female", phone: "9876543221", symptoms: "Headache", appointmentDate: "2025-03-06", appointmentTime: "11:30 AM", doctor: "Dr. Johnson" },
    { id: 3, patientName: "Bob Johnson", age: 40, gender: "Male", phone: "9876543232", symptoms: "Cold", appointmentDate: "2025-03-07", appointmentTime: "02:00 PM", doctor: "Dr. Brown" },
  ];

  return (
    <>
      <UserHeader />
      <div className="user-appointment-container">
        <div className="user-appointment-container-1">
          <h2>My Appointments</h2>
          <div className="table-wrapper">
            <table className="appointment-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Patient Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Phone Number</th>
                  <th>Symptoms</th>
                  <th>Appointment Date</th>
                  <th>Appointment Time</th>
                  <th>Doctor</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={appointment.id}>
                    <td>{index + 1}</td>
                    <td>{appointment.patientName}</td>
                    <td>{appointment.age}</td>
                    <td>{appointment.gender}</td>
                    <td>{appointment.phone}</td>
                    <td>{appointment.symptoms}</td>
                    <td>{appointment.appointmentDate}</td>
                    <td>{appointment.appointmentTime}</td>
                    <td>{appointment.doctor}</td>
                    <td>
                      <button className="cancel-btn">Request</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
