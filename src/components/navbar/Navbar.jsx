import React, {useState}  from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';
const Menu = () => (
    <>
     <p><a href="#login">Login</a></p>
     <p><a href="#signup">Sign Up</a></p>
    </>
)
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="resume__navbar">
            <div className="resume__navbar-links">
                <div className="resume__navbar-links_logo">
                    <img src={logo} alt="logo" />
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

export default Navbar
