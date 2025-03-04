import React from "react";
import AdSidenav from "./AdSidenav";
import "../styles/ManageDoctorPage.css";

export default function AdAppointmentPage() {
  const appointmentList = [
    {
      id: 1,
      appointmentId: "A101",
      patientName: "Alice Johnson",
      age: 30,
      gender: "Female",
      doctor: "Dr. John Smith",
      contact: "+1 234 567 890",
      appointmentDate: "2025-03-05",
      time: "11:00 A.M",
      status: "Confirmed",
    },
    {
      id: 2,
      appointmentId: "A102",
      patientName: "Robert Williams",
      age: 45,
      gender: "Male",
      doctor: "Dr. Emily Johnson",
      contact: "+1 987 654 321",
      appointmentDate: "2025-03-06",
      time: "02:30 P.M",
      status: "Pending",
    },
    {
      id: 3,
      appointmentId: "A103",
      patientName: "Sophia Martinez",
      age: 29,
      gender: "Female",
      doctor: "Dr. Michael Brown",
      contact: "+1 543 210 987",
      appointmentDate: "2025-03-07",
      time: "09:45 A.M",
      status: "Completed",
    },
  ];

  return (
    <>
      <AdSidenav />
      <div className="manage-doctor-container-manage">
        <h2>Appointments</h2>
        <div className="table-wrapper-manage">
          <table className="doctor-table-manage">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Appointment ID</th>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Doctor</th>
                <th>Contact</th>
                <th>Appointment Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointmentList.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.appointmentId}</td>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.age}</td>
                  <td>{appointment.gender}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.contact}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.time}</td>
                  <td className={`status ${appointment.status.toLowerCase()}`}>
                    {appointment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
