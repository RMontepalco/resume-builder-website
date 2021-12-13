import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import { Navbar_Dashboard } from  '../../components';
import './technicalskill.css'
const TechnicalSkills = () => {
    const [technicalSkills, setTechnicalSkills] = useState("");

    const history = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    // Add technical skills to resume template (US 8, FR 8.1)
    async function addTechnicalSkills (e){
        try {
            e.preventDefault();
            setError("")
            setLoading(true)
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                technicalSkills: technicalSkills
            });
            history("/workexperience", { replace: true });
        } catch {
            setError("Technical skills can't be empty")
        }
        setLoading(false)
    }
    async function prev (e){
        e.preventDefault();
        history("/education", { replace: true });
    }

    return (
        <>
        <Navbar_Dashboard/>
        <div className='technicalskill'>
            <Card>
                <Card.Body>
                <h2>Technical Skills</h2>
                <Form onSubmit={addTechnicalSkills}>
                    <textarea className="form-control" rows="5" type="text" value={technicalSkills}
                    onChange={(e) => setTechnicalSkills(e.target.value)}
                    placeholder="Technical Skills"/>
                    <Button disabled={loading} className="mt-4" type="submit">Next: Work Experience</Button>
                </Form>
                <Button className="mt-4" onClick={prev}>Previous: Education</Button>
                </Card.Body>
                
            </Card>
        </div>
        </>
        
    )
}

export default TechnicalSkills
