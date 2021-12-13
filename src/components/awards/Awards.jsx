import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';
import './awards.css';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import { Navbar_Dashboard } from  '../../components';
const Awards = () => {
    const [awardName, setAwardName] = useState("");
    const [awardOrganization, setAwardOrganization] = useState("");
    const [awardGivenDate, setAwardGivenDate] = useState("");
    const history = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    // Add awards to resume template (US 12, FR 12.1) 
    async function addAwards (e) {
        try {
            e.preventDefault();
            setError("")
            setLoading(true)
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                awardName: awardName,
                awardOrganization: awardOrganization,
                awardGivenDate: awardGivenDate
            });
            history("/activities", { replace: true });
        } catch {
            setError("Fail to add award")
        }
        
    }
    async function prev (e){
        e.preventDefault();
        history("/certifications", { replace: true });
    }

    return (
        <>
            <Navbar_Dashboard />
            <div className='award'>
                <Card>
                    <Card.Body>
                        <Form onSubmit={addAwards}>
                            <h2 className='mb-3 mt-3'>Awards</h2>
                            <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="text"value={awardName}
                            onChange={(e) => setAwardName(e.target.value)}
                            placeholder="Award Name"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="text"value={awardOrganization}
                            onChange={(e) => setAwardOrganization(e.target.value)}
                            placeholder="Organization"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                            <input type="month"value={awardGivenDate}
                            onChange={(e) => setAwardGivenDate(e.target.value)}
                            placeholder="Date Given"/>
                            </Form.Group>
                            <Button disabled={loading} className="mt-4" type="submit">Next: Activities</Button>
                        </Form>
                        <Button className="mt-4" onClick={prev}>Previous: Certifications</Button>
                    </Card.Body>
                </Card>
                
            </div>
        </>
        
    )
}

export default Awards
