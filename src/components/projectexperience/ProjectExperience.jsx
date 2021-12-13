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
    async function addProjectExperience (e) {
        try {
            e.preventDefault();
            setError("")
            setLoading(true)
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                projectName: projectName,
                projectCompanyName: projectCompanyName,
                projectCity: projectCity,
                projectState: projectState,
                projectStartDate: projectStartDate,
                projectEndDate: projectEndDate,
                projectDescription: projectDescription
            });
            history("/certifications", { replace: true });
        } catch  {
            setError("Error adding project experience")
        }
        setLoading(false) 
    }
    async function prev (e){
        e.preventDefault();
        history("/workexperience", { replace: true });
    }

    return (
        <>
            <Navbar_Dashboard />
            <div className='project'>
                <Card style={{height:'500px', width:'400px'}}>
                    <Card.Body>
                        <h2>Project Experience</h2>
                        <Form onSubmit={addProjectExperience}>
                            <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="text" value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            placeholder="Project Name"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="text" value={projectCompanyName}
                            onChange={(e) => setProjectCompanyName(e.target.value)}
                            placeholder="Company Name"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="text" value={projectCity}
                            onChange={(e) => setProjectCity(e.target.value)}
                            placeholder="City"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="text" value={projectState}
                            onChange={(e) => setProjectState(e.target.value)}
                            maxLength="2" 
                            placeholder="State"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="month" value={projectStartDate}
                            onChange={(e) => setProjectStartDate(e.target.value)}
                            placeholder="Start Date"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="month" value={projectEndDate}
                            onChange={(e) => setProjectEndDate(e.target.value)}
                            placeholder="End Date"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="text" value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                            placeholder="Description"/>
                            </Form.Group>
                            <Button disabled={loading} className="mt-2" type="submit">Next: Certifications</Button>
                        </Form>
                        <Button className="mt-4 mb-2" onClick={prev}>Previous: Work Experience</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
        
    )
}

export default ProjectExperience
