import React, { useState } from 'react';
import { Card, Button, Alert } from "react-bootstrap"
import Navbar_Dashboard from '../navbar_dashboard/Navbar_Dashboard';
import './account.css'
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
const Account = () => {
    const { currentUser } = useAuth()
    const [error, setError] = useState("")
    return (
        <>
            <Navbar_Dashboard />
            <div className="account">
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Profile</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <strong>Email:</strong> {currentUser?.email}
                        <div className="w-100 text-center mt-2">
                            <Link to="/updatepassword" className="text-decoration-none">Update Password</Link>
                        </div>
                    </Card.Body>
                    
                </Card>
            </div>
        </>
    )
}

export default Account
