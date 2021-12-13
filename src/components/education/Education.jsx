import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';
import { Navbar_Dashboard } from  '../../components';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';
import './education.css'
const Education = () => {
    const [schoolName, setSchoolName] = useState("");
    const [degreeLevel, setDegreeLevel] = useState("");
    const [major, setMajor] = useState("");
    const [gpa, setGPA] = useState("");
    const [educationStartDate, setEducationStartDate] = useState("");
    const [graduationDate, setGraduationDate] = useState("");
    const [relatedCoursework, set] = useState("");
    const history = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    // Add education to resume template (US 7, FR 7.1)
    async function addEducation (e) {
        try {
            e.preventDefault();
            setError("")
            setLoading(true)

            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                schoolName: schoolName,
                degreeLevel: degreeLevel,
                major: major,
                gpa: gpa,
                educationStartDate: educationStartDate,
                graduationDate: graduationDate,
                relatedCoursework: relatedCoursework
            });
            history("/technicalskills", { replace: true });
        } catch {
            setError("Error adding education")
        }
        
    }
    async function prev (e){
        e.preventDefault();
        history("/summarystatement", { replace: true });
    }

    return (
        <>
        <Navbar_Dashboard />
        <div className='education'>
            <Card style={{height:'500px', width:'400px'}}>
                <Card.Body>
                    <h2>Education</h2>
                    <Form onSubmit={addEducation}>  
                        <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="text" value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                            placeholder="School Name"/>
                       </Form.Group>
                       <Form.Group style={{marginBottom:'1rem'}}>
                        <input type="text" value={degreeLevel}
                            onChange={(e) => setDegreeLevel(e.target.value)}
                            placeholder="Degree Level"/>
                       </Form.Group>
                       <Form.Group style={{marginBottom:'1rem'}}>
                        <input type="text" value={major}
                        onChange={(e) => setMajor(e.target.value)}
                        placeholder="Major"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="text" value={gpa}
                            onChange={(e) => setGPA(e.target.value)}
                            placeholder="GPA"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="month" value={educationStartDate}
                            onChange={(e) => setEducationStartDate(e.target.value)}
                            placeholder="Start Date"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="month" value={graduationDate}
                            onChange={(e) => setGraduationDate(e.target.value)}
                            placeholder="Graduation Date"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="textarea" value={relatedCoursework}
                            onChange={(e) => set(e.target.value)}
                            placeholder="Related Coursework"/>
                        </Form.Group>
                        <Button disabled={loading} className="mt-2" type="submit">Next: Technical Skills</Button>
                    </Form>
                    <Button className="mt-3 " onClick={prev} id="prev-summary-statement">Previous: Summary Statement</Button>
                </Card.Body>
            </Card>
        </div>
        </>
        
    )
}

export default Education
