import React from 'react';
import AdSidenav from './AdSidenav';
import '../styles/AdDashboardPage.css';

export default function AdDashboardPage() {
    const cardData = [
        { title: 'Total Doctors', count: 4 },
        { title: 'Took Patient', count: 5 },
        { title: 'Total Appointment', count: 3 },
    ];

    return (
        <div className="dashboard-wrapper">
            <AdSidenav />
            <div className="AdDashboardPage-container">
                <div className="row g-3">
                    {cardData.map((card, index) => (
                        <div 
                            key={index} 
                            className={`col-md-6 ${card.title === 'Total Appointment' ? 'center-card' : ''}`}
                        >
                            <div className="card text-center p-3">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text-1">{card.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
