import React, { useState, useRef  } from 'react';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { Link, useNavigate  } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import Navbar from '../../components/navbar/Navbar';
import './signup.css';
const SignUp = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // // Create an Account (US 1, FR 1.1-1.4)
    // const createUser = async (e) => {
    //     try {
    //         e.preventDefault();
    //         await createUserWithEmailAndPassword(auth, email, password);
    //         await setDoc(doc(db, "users", auth.currentUser.uid), {
    //             email: auth.currentUser.email
    //         })
    //         //console.log(user);
    //     } catch (error) {
    //         //console.log(error);
    //     }
        
    // }
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate ()
    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
            setError("")
            setLoading(true)
            // await signup(emailRef.current.value, passwordRef.current.value)

            // Create an Account (US 1, FR 1.1-1.4)
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            await setDoc(doc(db, "users", auth.currentUser.uid), {
                email: auth.currentUser.email
            })
            
            history("/login", { replace: true })
        } catch {
            setError("Failed to create an account")
        }
    
        setLoading(false)
      }
    return (
        <>
        <Navbar/>
        <div className="signup">
            <Card className="signup__card">
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirm</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4" type="submit">Sign Up</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login" className="text-decoration-none">Log In</Link>
                    </div>
                </Card.Body>
             
            </Card>

        </div>
        </>
    )
}

export default SignUp
