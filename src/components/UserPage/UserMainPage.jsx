import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserMainPage.css"; // Import Custom CSS
import hospitalImage from "../../assets/img 1.jpg"; // Replace with a relevant hospital image

function UserMainPage() {
  const navigate = useNavigate();

  return (
    <div className="usermainpage-contain">
      <div className="container-fluid">
        <div className="row justify-content-center subcontain">
          
          {/* First Card - Hospital Information */}
          <div className="col-md-4 col-sm-6 custom-mt-1024">
            <div className="card text-center shadow card-1">
              <div className="card-body">
                <h5 className="card-title">
                  "Your Health, Our Priority"
                </h5>
                <p className="card-text">
                  Manage your medical records, book doctor appointments, and get expert care all in one place.
                </p>
              </div>
            </div>
          </div>

          {/* Second Card - Image + Button */}
          <div className="col-md-5 col-sm-6">
            <div className="card text-center shadow card-2">
              <div className="card-body">
                <img src={hospitalImage} alt="Hospital" className="img-fluid rounded" />
              </div>
              <div className="card-footer">
                <button className="btn" onClick={() => navigate("/doctors-list")}>
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default UserMainPage;
