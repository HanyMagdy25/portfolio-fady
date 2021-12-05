import React from 'react';
import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
                <div className="home-title">
                    <h1>Fady Samy</h1>
                    <p>I'm an IT Professional with 11+ years of experience in Microsoft Systems & Network Infrastructure and Cloud Services.</p>
                </div>
                <div className="home-links">
                    <a href="https://www.facebook.com/FadyMounirSamy">
                    <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fadymounir/">
                    
                    <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fadymounir/">
                    <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fadymounir/">
                    <i className="fab fa-twitter-square"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomePage
