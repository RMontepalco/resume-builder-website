import React, { useState, useRef} from 'react';
import { auth, db } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import Navbar from '../../components/navbar/Navbar';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import './login.css'
import header_image from '../../assets/header_image.png';
const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // // Log In to Account (US 2, FR 2.1-2.3)
    // const loginUser = async (e) => {
    //     try {
    //         e.preventDefault();
    //         const user = await signInWithEmailAndPassword(auth, email, password);
    //         //console.log(user);
    //     } catch (error) {
    //         //console.log(error);
    //     }
        
    // }

    const emailRef = useRef();
    const passwordRef = useRef();
    
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate ()
    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          // await login(emailRef.current.value, passwordRef.current.value)

          // Log In to Account (US 2, FR 2.1-2.3)
          await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
          
          history("/dashboard", { replace: true })
        } catch {
          setError("Failed to Log In")
        }
    
        setLoading(false)
      }
    return (
        <>
        <Navbar/>
        <div className="login">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4" type="submit">Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        <Link to="/forgotpassword" className="text-decoration-none">Forgot Password?</Link>
                    </div>
                    <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link>
                    </div>
                </Card.Body>
                
            </Card>
            
        </div>

        </>
    )
}

export default Login
