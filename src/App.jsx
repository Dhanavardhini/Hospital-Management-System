import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/common/Landing';
import AdLogin from './components/Admin/AdLogin';
import AdDashboard from './components/Admin/AdDashboard';
import AddNewDoctor from './components/Admin/AddNewDoctor';
import ManageDoctor from './components/Admin/ManageDoctors';
import PatientRecord from './components/Admin/PatientRecord';
import Adappointment from './components/Admin/Adappointment';
import DocLogin from './components/doctor/DocLogin';
import DocDashboard from './components/doctor/DocDashboard';
import UserLogin from './components/user/UserLogin';
import UserRegister from './components/user/UserRegister';
import UserDashboard from './components/user/UserDashboard';
import UserDoctorList from './components/user/UserDoctorList';
import UserDoctorListReg from './components/user/UserDoctorListReg';
import UserViewApp from './components/user/UserViewApp';


const routes = [
  { path: '/', element: <Landing/> },
  { path: '/adloginpage', element: <AdLogin/> },
  { path: '/addashboard', element: <AdDashboard/> },
  { path: '/add-new-doctor', element: <AddNewDoctor/> },
  { path: '/manage-doctors', element: <ManageDoctor/> },
  { path: '/patient-records', element: <PatientRecord/> },
  { path: '/appointment-history', element: <Adappointment/> },
  // ------------------------
  { path: '/doctorlogin', element: <DocLogin/> },
  { path: '/doctor-dashboard', element: <DocDashboard/> },
  // ------------------------
  { path: '/userlogin', element: <UserLogin/> },
  { path: '/user-register', element: <UserRegister/> },
  { path: '/userdashboard', element: <UserDashboard/> },
  { path: '/doctors-list', element: < UserDoctorList/> },
  { path: '/doctors-list-reg', element: < UserDoctorListReg/> },
  { path: '/view-appointments', element: <  UserViewApp/> },
];
export default function App() {  
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}
