import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { auth, db } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { useAuth } from "../../contexts/AuthContext"
import { Card, Button, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
const Dashboard = () => {
    // const [user, setUser] = useState({});

    // // Display current user's email address
    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // });

    // // Log Out of Account (US 3, FR 3.1-3.3)
    // const logoutUser = async (e)=> {
    //     signOut(auth);
    // }
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useNavigate()
    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/login")
        } catch {
          setError("Failed to log out")
        }
    }
    return (
        <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
    )
}

export default Dashboard
