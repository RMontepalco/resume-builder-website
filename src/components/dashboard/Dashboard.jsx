import React, { useState } from 'react';
import Navbar_Dashboard from '../navbar_dashboard/Navbar_Dashboard';
import { auth, db } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { useAuth } from "../../contexts/AuthContext"
import { Card, Button, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import './dashboard.css'
const Menu = () => (
  <>

  <input type="text" placeholder="Search Resume"  />
   <p><a href="#/" style={{ textDecoration: 'none', color: 'unset'}}>My Resume</a></p>
   <p><a href="#/"style={{ textDecoration: 'none', color: 'unset'}}>Recent</a></p>
   <p><a href="#/" style={{ textDecoration: 'none', color: 'unset'}}>Bin</a></p>
  </>
)
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
          
          //await logout()
          signOut(auth);
          history("/", { replace: true })
        } catch {
          setError("Failed to log out")
        }
    }
    return (
      <>
        <Navbar_Dashboard />
        <div className="dashboard">
          <div className='dashboard__menu'>
            
            <Menu />
          </div>
          <div className='dashboard__resume'>
            resume
          </div>



        </div>
        
    </>
    )
}

export default Dashboard
