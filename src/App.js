import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import {Header} from './containers';
import { Home, Login, SignUp, Dashboard, CreateResume, Templates, ContactInformation, SummaryStatement, Education, TechnicalSkills, WorkExperience } from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div>
                <Home/>
                <Login/>
                <SignUp/>
                <Dashboard/>
                <Templates/>
                <ContactInformation/>
                <SummaryStatement/>
                <Education/>
                <TechnicalSkills/>
                <WorkExperience/>
            </div>
        </div>
    )
}


export default App
