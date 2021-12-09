import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar_dashboard.css';
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { getAuth, signOut } from "firebase/auth";
import { Card, Button, Alert } from "react-bootstrap"




const Menu = () => (

<>
    <p><a href="#/dashboard" style={{ textDecoration: 'none', color: 'unset' }}>Dashboard</a></p>
    <p><a href="#/account" style={{ textDecoration: 'none', color: 'unset' }}>Account</a></p>
</>
)

const Navbar_Dashboard = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="resume__navbar">
            <div className="resume__navbar-links">
                <div className="resume__navbar-links_logo">

                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="resume__navbar-links_container">
                    <Menu />
                </div>
                <div className="resume__navbar-menu">
                    {toggleMenu
                        ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className="resume__navbar-menu_container scale-up-center">
                            <div className="resume__navbar-menu_container-links">
                                <Menu />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar_Dashboard
