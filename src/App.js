import React, { useEffect, useState, Fragment } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
//import {Header} from './containers';
import { Home, Login, SignUp, Dashboard, CreateResume,
    Templates, STEMTemplate,
    ContactInformation, SummaryStatement, Education,
    TechnicalSkills, WorkExperience, ProjectExperience,
    Certifications, Awards, Activities } from './components';
import './App.css';

function App() {
    return (
        <div className="App">
            <div>

                <Router>
                    <Fragment>
                        <Routes>
                            <Route exact path="/resume-builder-website/home" element={<Home />}/>
                            <Route path="/resume-builder-website/login" element={<Login />} />
                            <Route path="/resume-builder-website/signup" element={<SignUp />} />
                            <Route path="/resume-builder-website/dashboard" element={<Dashboard />} />
                            <Route path="/resume-builder-website/createresume" element={<CreateResume />} />
                        </Routes>
                    </Fragment>
                </Router>

            </div>
        </div>
        

    )
}

export default App
