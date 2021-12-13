import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { Button, Card, Form } from 'react-bootstrap';
import './templates.css';
import { useNavigate } from 'react-router-dom';
var templateID;
;
const Templates = () => {
    const [radio, setRadio] = useState();
<<<<<<< HEAD
    const history = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    // Select a resume template (US 4, FR 4.1)
    async function handleSubmit (e) {
=======

    // Select and create a resume template (US 4, FR 4.1)
    // Store resume ID and resume information into database (US 14, FR 14.1)
    const createTemplate = async (e) => {
>>>>>>> 0219d983aa9a5390490c3d225306582232380f09
        try {
            e.preventDefault();
            setError("")
            setLoading(true)
            const template = await addDoc(collection(db, "users", auth.currentUser.uid, "resumes"), {
                resumeType: radio
            });
            
            templateID = template.id;
            
            history("/stemplate", { replace: true });
        } catch {
            setError("Failed to create resume")
        }
        setLoading(false)
    }

    return (
        <div className='template'>
            <Card style={{height:'50%'}} >
                <Card.Body>
                    <h2 >Resume Template selected: {radio}</h2>
                    <Form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column'}}>
                        <Form.Group style={{ display:'flex', flexDirection:'row'}} >
                            <label>General </label>
                            <input type="radio"
                            checked={radio === "general"}
                            value="General"
                            onChange={(e) => {setRadio(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group style={{ display:'flex', flexDirection:'row'}}>
                            <label>Arts, Communications, and Entertainment</label>
                            <input type="radio"
                            checked={radio === "ace"}
                            value="Arts, Communications, and Entertainment"
                            onChange={(e) => {setRadio(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group style={{ display:'flex', flexDirection:'row'}}>
                            <label>Business, Financial Services, and Logistics</label>
                            <input type="radio"
                            checked={radio === "business"}
                            value="Business, Financial Services, and Logistics"
                            onChange={(e) => {setRadio(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group style={{ display:'flex', flexDirection:'row'}}> 
                            <label>Education and Public & Human Services</label>
                            <input type="radio"
                            checked={radio === "education"}
                            value="Education and Public & Human Services"
                            onChange={(e) => {setRadio(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group style={{ display:'flex', flexDirection:'row'}}>
                            <label>Health and Nutrition </label>
                            <input type="radio"
                            checked={radio === "health"}
                            value="Health and Nutrition"
                            onChange={(e) => {setRadio(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group style={{ display:'flex', flexDirection:'row'}}>
                            <label>Science, Technology, Engineering, and Math </label>
                            <input type="radio"
                            checked={radio === "stem"}
                            value="Science, Technology, Engineering, and Math"
                            onChange={(e) => {setRadio(e.target.value)}}/>
                        </Form.Group>

                        <Button disabled={loading} className="w-100 mt-4" type="submit" >Next: Contact Information</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export { Templates, templateID }
