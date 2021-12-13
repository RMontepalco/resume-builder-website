import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { doc, updateDoc } from "firebase/firestore";
import { templateID } from '../templates/Templates';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './contactinformation.css'
const ContactInformation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
<<<<<<< HEAD
    const history = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    // Log In to Account (US 2, FR 2.1-2.3)
    async function addContactInformation (e) {
=======

    // Add contact information to resume template (US 5, FR 5.1)
    const addContactInformation = async (e) => {
>>>>>>> 0219d983aa9a5390490c3d225306582232380f09
        try {
            e.preventDefault();
            setError("")
            setLoading(true)
            await updateDoc(doc(db, "users", auth.currentUser.uid, "resumes", templateID), {
                firstName: firstName,
                lastName: lastName,
                city: city,
                state: state,
                zipCode: zipCode,
                phoneNumber: phoneNumber,
                emailAddress: email,
                website: website
            });
            history("/summarystatement", { replace: true });
           
        } catch {
            setError("Failed to add contact information")
            
        }
        setLoading(false)
    }

    return (
        <div className='contact'>
            <Card style={{height:'500px'}}>
                <Card.Body>
                    <h3>Contact Information</h3>
                    <Form onSubmit={addContactInformation} style={{ display:'flex', flexDirection:'column'}}>
                        <Form.Group style={{marginBottom: '1rem'}}>
                            <input type="text" value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom: '1rem'}}>
                        <input type="text" value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom: '1rem'}}>

                        <input type="text" value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom: '1rem'}}>
                        <input type="text" value={state}
                        onChange={(e) => setState(e.target.value)}
                        maxLength="2" 
                        placeholder="State"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom: '1rem'}}>
                        <input type="text" value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        pattern="[0-9]{5}" 
                        placeholder="Ex: XXXXX"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom: '1rem'}}>
                        <input type="tel" value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                        placeholder="Ex: XXX-XXX-XXXX"/>
                        </Form.Group>
                        <Form.Group style={{marginBottom: '1rem'}}>
                        <input type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"/>
                        </Form.Group>
                        <Form.Group>
                        <input type="text" value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Website"/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4 mb-4" type="submit" >Next: Summary Statement</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ContactInformation
