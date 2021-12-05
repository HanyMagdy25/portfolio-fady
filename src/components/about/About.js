import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="left-about">
            <div className="left-about-container">
              <div className="global-title">About Me</div>
              <div className="about-content">
                <h3>Hi, I'm <span>Fady Samy</span></h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ipsum sit nibh amet egestas tellus. Eu leo morbi massa
                  sem faucibus nulla gravida arcu ante sollicitudin orci nunc
                  gravida.Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum. Sed
                  ut perspiciatis unde omnis iste natur
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ipsum sit nibh amet egestas tellus.  sunt
                  in culpa qui officia deserunt mollit anim id est laborum. Sed
                  ut perspiciatis unde omnis iste natur
                </p>
              </div>
              <div className="about-btns">
                <a href="front.pdf" download="fady.pdf"><button className="first-btn">Download CV</button></a>
              </div>
            </div>
          </div>

          <div className="right-about">
            <div className="about-pic">
              <div className="about-pic-real"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
