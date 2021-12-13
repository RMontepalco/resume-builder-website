import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Home, Login, SignUp, Dashboard,
    Templates, STEMTemplate, DisplayResume,
    ContactInformation, SummaryStatement, Education,
    TechnicalSkills, WorkExperience, ProjectExperience,
    Certifications, Awards, Activities, Navbar_Dashboard } from '../../components';

const CreateResume = () => {
    return (
        <div>
            <Navbar_Dashboard/>
            <Templates/>

        </div>
    )
}

export default CreateResume
