import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { Card } from 'react-bootstrap';

var templateID;

const Templates = () => {
    const [radio, setRadio] = useState();

    // Select a resume template (US 4, FR 4.1)
    const createTemplate = async (e) => {
        try {
            e.preventDefault();
            const template = await addDoc(collection(db, "users", auth.currentUser.uid, "resumes"), {
                resumeType: radio
            });
            
            templateID = template.id;
            console.log("Resume template created.");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Card>
            <Card.Body>
                
            <h3>Resume Template selected: {radio}</h3>
            <form onSubmit={createTemplate}>

                <label>General</label>
                <input type="radio"
                checked={radio === "general"}
                value="General"
                onChange={(e) => {setRadio(e.target.value)}}/>
                <br/>
                <label>Arts, Communications, and Entertainment</label>
                <input type="radio"
                checked={radio === "ace"}
                value="Arts, Communications, and Entertainment"
                onChange={(e) => {setRadio(e.target.value)}}/>
                <br/>
                <label>Business, Financial Services, and Logistics</label>
                <input type="radio"
                checked={radio === "business"}
                value="Business, Financial Services, and Logistics"
                onChange={(e) => {setRadio(e.target.value)}}/>
                <br/>
                <label>Education and Public & Human Services</label>
                <input type="radio"
                checked={radio === "education"}
                value="Education and Public & Human Services"
                onChange={(e) => {setRadio(e.target.value)}}/>
                <br/>
                <label>Health and Nutrition</label>
                <input type="radio"
                checked={radio === "health"}
                value="Health and Nutrition"
                onChange={(e) => {setRadio(e.target.value)}}/>
                <br/>
                <label>Science, Technology, Engineering, and Math</label>
                <input type="radio"
                checked={radio === "stem"}
                value="Science, Technology, Engineering, and Math"
                onChange={(e) => {setRadio(e.target.value)}}/>
                <br/>

                <button>Next: Contact Information</button>
            </form>
           </Card.Body>
        </Card>
    )
}

export { Templates, templateID }
