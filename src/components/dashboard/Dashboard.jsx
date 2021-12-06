import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="logged-in">
                <h3 id="account-email"></h3>
                <ul id="resume-list"></ul>
                <button id="create-resume">Create Resume</button>
                <button id="logout">Log Out</button>
            </div>
        </div>
    )
}

export default Dashboard
