import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';

import { useNavigate } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import { Navbar_Dashboard } from  '../../components';
import './activities.css';

const Activities = () => {
    const [activityRole, setActivityRole] = useState("");
    const [activityName, setActivityName] = useState("");
    const [activityStartDate, setActivityStartDate] = useState("");
    const [activityEndDate, setActivityEndDate] = useState("");
    const [activityDescription, setActivityDescription] = useState("");
    const history = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    // Add activities to resume template (US 13, FR 13.1) 
    async function addActivities (e){
        try {
            e.preventDefault();
            setError("")
            setLoading(true)
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                activityRole: activityRole,
                activityName: activityName,
                activityStartDate: activityStartDate,
                activityEndDate: activityEndDate,
                activityDescription: activityDescription
            });
            history("/displayresume", { replace: true });
        } catch  {
            setError("Fail to add activities")
        }
        setLoading(false)
    }
    async function prev (e){
        e.preventDefault();
        history("/awards", { replace: true });
    }
    return (
        <>
            <Navbar_Dashboard />
            <div className ='activities'>
                <Card>
                    <Card.Body>
                        <h2 className='mb-3 mt-3'>Activities</h2>
                        <Form onSubmit={addActivities}>
                            <Form.Group style={{marginBottom:'1rem'}}>
                                <input type="text"value={activityRole}
                                onChange={(e) => setActivityRole(e.target.value)}
                                placeholder="Role"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                                <input type="text"value={activityName}
                                onChange={(e) => setActivityName(e.target.value)}
                                placeholder="Activity Name"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                                <input type="month"value={activityStartDate}
                                onChange={(e) => setActivityStartDate(e.target.value)}
                                placeholder="Start Date"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                                <input type="month"value={activityEndDate}
                                onChange={(e) => setActivityEndDate(e.target.value)}
                                placeholder="End Date"/>
                            </Form.Group>
                            <Form.Group>
                            <input type="text"value={activityDescription}
                            onChange={(e) => setActivityDescription(e.target.value)}
                            placeholder="Description"/>
                            </Form.Group>
                            <Button disabled={loading} className="mt-4">Finish Resume Creation</Button>
                        </Form>
                        <Button className="mt-4 mb-2" onClick={prev}>Previous: Award</Button>
                    </Card.Body>
                </Card>
                
            </div>
        </>
        
    )
}

export default Activities
