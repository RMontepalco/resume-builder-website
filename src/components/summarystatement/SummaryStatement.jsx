import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import {doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form } from 'react-bootstrap';
import { Navbar_Dashboard } from  '../../components';
import './summary.css'
const SummaryStatement = () => {
    const [summaryStatement, setSummaryStatement] = useState("");
<<<<<<< HEAD
    const history = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    // Add summary statement to resume template (US 6, FR 6.1)
    async function addSummaryStatement (e) {
=======

    // Add summary statement to resume template (US 6, FR 6.1) 
    const addSummaryStatement = async (e) => {
>>>>>>> 0219d983aa9a5390490c3d225306582232380f09
        try {
            e.preventDefault();
            setError("")
            setLoading(true)
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                summaryStatement: summaryStatement
            });
            history("/education", { replace: true });
        } catch {
            setError("Failed to add summary statement")
        }
        setLoading(false)
    }
    async function prev (e){
        e.preventDefault();
        history("/stemplate", { replace: true });
    }

    return (
        <>
        <Navbar_Dashboard/>
        <div className='summary'>
            <Card>
                <Card.Body>
                <h2>Summary Statement</h2>
                <Form onSubmit={addSummaryStatement}>
                    {/* <input type="text" value={summaryStatement}
                    onChange={(e) => setSummaryStatement(e.target.value)}
                    placeholder="Summary Statement"/> */}
                    <textarea className="form-control" rows="5" type="text" value={summaryStatement}
                    onChange={(e) => setSummaryStatement(e.target.value)}
                    placeholder="Summary Statement"/>
                    <Button disabled={loading} className="w-100 mt-4" type="submit">Next: Education</Button>
                </Form>
                <Button className="mt-4" onClick={prev}>Previous: Contact Information</Button>
                </Card.Body>
                
            </Card>
        </div>
        </>
    )
}

export default SummaryStatement
