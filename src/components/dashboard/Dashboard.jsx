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
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import { BsPlusCircle } from 'react-icons/bs';

const Menu = () => (
  <>
  
    <input type="text"  placeholder="Search Resume"  />
    <p><a href="#/dashboard" style={{ textDecoration: 'none', color: 'unset'}}>My Resume</a></p>
    <p><a href=""style={{ textDecoration: 'none', color: 'unset'}}>Recent</a></p>
    <p><a href="" style={{ textDecoration: 'none', color: 'unset'}}>Bin</a></p>
  </>
)
const Dashboard = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <Navbar_Dashboard />
      <div className="dashboard">
        <div className='dashboard__navbar'>      
          <Menu />
        </div>
        <div className="dashboard__navbar-menu">
                    {toggleMenu 
                        ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} /> 
                        : <RiMenuFill color="#000" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className="dashboard__navbar-menu_container scale-up-center">
                            <div className="dashboard__navbar-menu_container-links">  
                              <Menu />
                            </div>
                        </div>
                    )}
                </div>
        <div className='dashboard__resume'>
          
            <Card>
              <Card.Body style={{display:'flex', flexDirection:'column',justifyContent:'center' , alignItems:'center'}}>
                <Link to="/createresume" className="text-decoration-none"><BsPlusCircle color='#000' size={40}/></Link>
              </Card.Body>
            </Card>
           
        </div>



      </div>
        
    </>
    )
}

export default Dashboard
