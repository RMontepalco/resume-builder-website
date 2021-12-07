import React, { useEffect, useState, Fragment } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
//import {Header} from './containers';
import { Home, Login, SignUp, Dashboard, CreateResume, Templates, ContactInformation, SummaryStatement, Education, TechnicalSkills, WorkExperience, ProjectExperience, Certifications, Awards, Activities } from './components';
import './App.css';

function App() {
    return (
        <div className="App">
            <div>

                <Router>
                    <Fragment>
                        <Routes>
                            <Route exact path="/home" element={<Home />}/>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/createresume" element={<CreateResume />} />
                        </Routes>
                    </Fragment>
                </Router>

            </div>
        </div>
        

    )
}

export default App
