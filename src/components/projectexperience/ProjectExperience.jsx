import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import { Navbar_Dashboard } from  '../../components';
import './project.css'
const ProjectExperience = () => {
    const [projectName, setProjectName] = useState("");
    const [projectCompanyName, setProjectCompanyName] = useState("");
    const [projectCity, setProjectCity] = useState("");
    const [projectState, setProjectState] = useState("");
    const [projectStartDate, setProjectStartDate] = useState("");
    const [projectEndDate, setProjectEndDate] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const history = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    // Add project experience to resume template (US 10, FR 10.1)
    const addProjectExperience = async (e) => {
        try {
            e.preventDefault();
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                projectName: projectName,
                projectCompanyName: projectCompanyName,
                projectCity: projectCity,
                projectState: projectState,
                projectStartDate: projectStartDate,
                projectEndDate: projectEndDate,
                projectDescription: projectDescription
            });
            console.log("Project experience added to resume template.");
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <h3>Project Experience</h3>
            <form onSubmit={addProjectExperience}>
                <input type="text" value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Project Name"/>
                <input type="text" value={projectCompanyName}
                onChange={(e) => setProjectCompanyName(e.target.value)}
                placeholder="Company Name"/>
                <input type="text" value={projectCity}
                onChange={(e) => setProjectCity(e.target.value)}
                placeholder="City"/>
                <input type="text" value={projectState}
                onChange={(e) => setProjectState(e.target.value)}
                maxLength="2" 
                placeholder="State"/>
                <input type="month" value={projectStartDate}
                onChange={(e) => setProjectStartDate(e.target.value)}
                placeholder="Start Date"/>
                <input type="month" value={projectEndDate}
                onChange={(e) => setProjectEndDate(e.target.value)}
                placeholder="End Date"/>
                <input type="text" value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Description"/>
                <button>Next: Certifications</button>
            </form>
            <button>Previous: Work Experience</button>
        </div>
    )
}

export default ProjectExperience
