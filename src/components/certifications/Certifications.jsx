import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import { Navbar_Dashboard } from  '../../components';
import './certifications.css';

const Certifications = () => {
    const [certificationName, setCertificationName] = useState("");
    const [certificationOrganization, setCertificationOrganization] = useState("");
    const [certificationIssuedDate, setCertificationIssuedDate] = useState("");
    const [certificationExpirationDate, setCertificationExpirationDate] = useState("");
    const history = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    // Add certifications to resume template (US 11, FR 11.1) 
    async function addCertifications (e) {
        try {
            e.preventDefault();
            setError("")
            setLoading(true)
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                certificationName: certificationName,
                certificationOrganization: certificationOrganization,
                certificationIssuedDate: certificationIssuedDate,
                certificationExpirationDate: certificationExpirationDate
            });
            history("/awards", { replace: true });
        } catch {
            setError("Fail to add certification")
        }
        setLoading(false)
    }
    async function prev (e){
        e.preventDefault();
        history("/projectexperience", { replace: true });
    }

    return (
        <>
            <Navbar_Dashboard />

            <div className='certification'>
                <Card>
                    <Card.Body>
                        <h2 className='mb-4'>Certifications</h2>
                        <Form onSubmit={addCertifications}>
                            <Form.Group style={{marginBottom:'1rem'}}>
                                <input type="text" value={certificationName}
                                onChange={(e) => setCertificationName(e.target.value)}
                                placeholder="Certification Name"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                                <input type="text" value={certificationOrganization}
                                onChange={(e) => setCertificationOrganization(e.target.value)}
                                placeholder="Organization"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                                <input type="month" value={certificationIssuedDate}
                                onChange={(e) => setCertificationIssuedDate(e.target.value)}
                                placeholder="Date Issued"/>
                            </Form.Group>
                            <Form.Group style={{marginBottom:'1rem'}}>
                                <input type="month" value={certificationExpirationDate}
                                onChange={(e) => setCertificationExpirationDate(e.target.value)}
                                placeholder="Expiration Date"/>
                            </Form.Group>
                            <Button disabled={loading} className="mt-2" type="submit">Next: Awards</Button>
                        </Form>
                        <Button className="mt-4" onClick={prev}>Previous: Project Experience</Button>
                    </Card.Body>
                </Card>
                
            </div>
        </>
        
    )
}

export default Certifications
