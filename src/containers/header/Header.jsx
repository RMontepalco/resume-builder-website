import React from 'react';
import './header.css';
import header_image from '../../assets/header_image.png';
const header = () => {
    return (
        <div className="resume__header section__padding">
           <div className="resume__header-contain">
                <h1 className="gradient__text">
                    ResuMe Made It Easy.
                </h1>
                <p>
                    ResuMe simplifies the resume creation process by providing step-by-step templates that suit your career path.
                </p>
                <div className="resume__header-container_button">
                    <button type="button">Get Started</button>
                </div>
                <div className="resume__header-image">
                    <img src={header_image} alt="header_image" />
                </div>
            </div>
        </div>
    )
}

export default header
