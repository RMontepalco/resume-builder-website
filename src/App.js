import React, { useEffect, useState, Fragment } from 'react';
import ReactDOM from "react-dom";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
//import {Header} from './containers';
import { Home, Login, SignUp, Dashboard, CreateResume,
    Templates, STEMTemplate, DisplayResume,
    ContactInformation, SummaryStatement, Education,
    TechnicalSkills, WorkExperience, ProjectExperience,
    Certifications, Awards, Activities, Account } from './components';
import './App.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
    return (
        <div className="App">
            <div>

                <Router basename="/">
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/dashboard" element={<PrivateRoute> <Dashboard /></PrivateRoute>}/>
                        <Route path="/account" element={<PrivateRoute> <Account /></PrivateRoute>}/>
                        <Route path="/createresume" element={<PrivateRoute> <CreateResume /></PrivateRoute>}/>
                        <Route path="/templates" element={<PrivateRoute> <Templates /></PrivateRoute>}/>
                        <Route path="/stemplate" element={<PrivateRoute> <STEMTemplate /></PrivateRoute>}/>
                        <Route path="/displayresume" element={<PrivateRoute> <DisplayResume /></PrivateRoute>}/>
                        
                    </Routes>
                </Router>

            </div>
        </div>
        

    )
}

export default App
