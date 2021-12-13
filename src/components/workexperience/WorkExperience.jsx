import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import { Navbar_Dashboard } from  '../../components';
import './workexperience.css'
const WorkExperience = () => {
    const [workPosition, setWorkPosition] = useState("");
    const [workCompanyName, setWorkCompanyName] = useState("");
    const [workCity, setWorkCity] = useState("");
    const [workState, setWorkState] = useState("");
    const [workStartDate, setWorkStartDate] = useState("");
    const [workEndDate, setWorkEndDate] = useState("");
    const [workDescription, setWorkDescription] = useState("");

    const history = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    // Add work experience to resume template (US 9, FR 9.1)
    async function addWorkExperience (e)  {
        try {
            e.preventDefault();
            setError("")
            setLoading(true)
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                workPosition: workPosition,
                workCompanyName: workCompanyName,
                workCity: workCity,
                workState: workState,
                workStartDate: workStartDate,
                workEndDate: workEndDate,
                workDescription: workDescription
            });
            history("/projectexperience", { replace: true });
        } catch {
            setError("Error adding work experience")
        }
        setLoading(false)
    }
    async function prev (e){
        e.preventDefault();
        history("/technicalskills", { replace: true });
    }

    return (
        <>
        <Navbar_Dashboard />
        <div className='workexperience'>
            <Card style={{height:'500px', width:'400px'}}>
                <Card.Body>
                    <h3>Work Experience</h3>
                    <Form onSubmit={addWorkExperience}>
                        <Form.Group style={{marginBottom:'1rem'}}>
                        <input type="text" value={workPosition}
                        onChange={(e) => setWorkPosition(e.target.value)}
                        placeholder="Work Position"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="text" value={workCompanyName}
                            onChange={(e) => setWorkCompanyName(e.target.value)}
                            placeholder="Company Name"/>
                        </Form.Group>

                        <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="text" value={workCity}
                            onChange={(e) => setWorkCity(e.target.value)}
                            placeholder="City"/>
                        </Form.Group>

                        <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="text" value={workState}
                            onChange={(e) => setWorkState(e.target.value)}
                            maxLength="2" 
                            placeholder="State"/>
                        </Form.Group>
                        
                        <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="month" value={workStartDate}
                            onChange={(e) => setWorkStartDate(e.target.value)}
                            placeholder="Start Date"/>
                        </Form.Group>
                        
                        <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="month" value={workEndDate}
                            onChange={(e) => setWorkEndDate(e.target.value)}
                            placeholder="End Date"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="text" value={workDescription}
                            onChange={(e) => setWorkDescription(e.target.value)}
                            placeholder="Description"/>
                        </Form.Group>

                        <Button disabled={loading} className="mt-4" type="submit">Next: Project Experience</Button>
                    </Form>
                    <Button className="mt-4" onClick={prev} >Previous: Technical Skills</Button>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default WorkExperience
