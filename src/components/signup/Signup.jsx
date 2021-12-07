import React, { useState, useRef  } from 'react';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Card, Button, Form } from 'react-bootstrap';

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

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
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
                            <Form.Control type="email" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <Button classname="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log in
            </div>
        </>
    )
}

export default SignUp
