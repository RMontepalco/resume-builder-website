import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Home, Login, SignUp, Dashboard,
    Templates, STEMTemplate, DisplayResume,
    ContactInformation, SummaryStatement, Education,
    TechnicalSkills, WorkExperience, ProjectExperience,
    Certifications, Awards, Activities } from '../../components';

const CreateResume = () => {
    return (
        <div>
            <Templates/>
            <STEMTemplate/>

        </div>
    )
}

export default CreateResume
