import React, { useState } from "react";
import "./Service.css";
import FirstCardPic from "../../assets/test.jpg";
import SecondCardPic from "../../assets/test2.jpg";
import ThirdCardPic from "../../assets/fady.jpg";

const Service = () => {
  //first card
  const [firstDiv, setFirstDiv] = useState(false);
  const handleFirstDiv = () => setFirstDiv(!firstDiv);
  //second card
  const [secondtDiv, setSecondtDiv] = useState(false);
  const handleSecondtDiv = () => setSecondtDiv(!secondtDiv);
  //third card
  const [thirdDiv, setThirdDiv] = useState(false);
  const handleThirdtDiv = () => setThirdDiv(!thirdDiv);
  //fourth card
  const [fourthDiv, setFourthDiv] = useState(false);
  const handleFourthDiv = () => setFourthDiv(!fourthDiv);

  // const x = divContainer;

  return (
    <div className="service">
      <div className="service-container">
        <div className="service-title">
          <h1 className="global-title">What I Do</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            ipsum sit nibh amet egestas tellus.
          </p>
        </div>
        <div className="cards">
          <div className="cards-container">
            <div className="card-item">
              <div className="card-item-title">
                <span className="icon">
                  <i className="fas fa-american-sign-language-interpreting"></i>
                </span>
                <h3>Card Title</h3>
              </div>
              <button className="first-btn" onClick={handleFirstDiv}>
                See More <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="card-item">
              <div className="card-item-title">
                <span className="icon">
                  <i className="fab fa-windows"></i>
                </span>
                <h3>Card Title</h3>
              </div>
              <button className="first-btn" onClick={handleSecondtDiv}>
                See More <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="card-item">
              <div className="card-item-title">
                <span className="icon">
                <i className="fas fa-project-diagram"></i>
                </span>
                <h3>Card Title</h3>
              </div>
              <button className="first-btn" onClick={handleThirdtDiv}>
              See More <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="card-item">
              <div className="card-item-title">
                <span className="icon">
                <i className="fas fa-database"></i>
                </span>
                <h3>Card Title</h3>
              </div>
              <button className="first-btn" onClick={handleFourthDiv}>
              See More <i className="fas fa-arrow-right"></i>
              </button>
            </div>

          </div>
        </div>
            
        {firstDiv && (
          <div className="first-div">
            <div className="first-div-container">
              <div className="first-div-inner">
                <img src={FirstCardPic} alt="test" />
                
                <h1>Motion Graphic Breakdown In Cinema 4D</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ipsum sit nibh amet egestas tellus.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
                <p>
                  Just because we can't get out and about like we normally
                  would, doesn’t mean we have to taking pictures. There’s still
                  plenty you can do, provided you're prepared to use some
                  imagination. Here are a few ideas to keep you shooting until
                  normal life resumes. Most photographers love to shoot the
                  unusual, and you don’t get much more unusual than These
                  Unprecedented Times. Right now everything counts as out of the
                  ordinary. There are a number of remarkable things about these
                  lockdown days that are worth photographing now we can remember
                  them when it is all over.
                </p>
                <p>
                  Just because we can't get out and about like we normally
                  would, doesn’t mean we have to taking pictures. There’s still
                  plenty you can do, provided you're prepared to use some
                  imagination. Here are a few ideas to keep you shooting until
                  normal life resumes. Most photographers love to shoot the
                  unusual, and you don’t get much more unusual than These
                  Unprecedented Times. Right now everything counts as out of the
                  ordinary. There are a number of remarkable things about these
                  lockdown days that are worth photographing now we can remember
                  them when it is all over.
                </p>
                <p>
                  Just because we can't get out and about like we normally
                  would, doesn’t mean we have to taking pictures. There’s still
                  plenty you can do, provided you're prepared to use some
                  imagination. Here are a few ideas to keep you shooting until
                  normal life resumes. Most photographers love to shoot the
                  unusual, and you don’t get much more unusual than These
                  Unprecedented Times. Right now everything counts as out of the
                  ordinary. There are a number of remarkable things about these
                  lockdown days that are worth photographing now we can remember
                  them when it is all over.
                </p>
                
              </div>
            </div>
            <div className="remove-card">
              <span onClick={handleFirstDiv}>
                <i class="far fa-times-circle"></i>
              </span>
            </div>
          </div>
        )}

        {secondtDiv && (
          <div className="first-div">
            <div className="first-div-container">
              <div className="first-div-inner">
                <img src={SecondCardPic} alt="test" />
                
                <h1>Motion Graphic Breakdown In Cinema 4D</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ipsum sit nibh amet egestas tellus.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
                <p>
                  Just because we can't get out and about like we normally
                  would, doesn’t mean we have to taking pictures. There’s still
                  plenty you can do, provided you're prepared to use some
                  imagination. Here are a few ideas to keep you shooting until
                  normal life resumes. Most photographers love to shoot the
                  unusual, and you don’t get much more unusual than These
                  Unprecedented Times. Right now everything counts as out of the
                  ordinary. There are a number of remarkable things about these
                  lockdown days that are worth photographing now we can remember
                  them when it is all over.
                </p>
                <p>
                  Just because we can't get out and about like we normally
                  would, doesn’t mean we have to taking pictures. There’s still
                  plenty you can do, provided you're prepared to use some
                  imagination. Here are a few ideas to keep you shooting until
                  normal life resumes. Most photographers love to shoot the
                  unusual, and you don’t get much more unusual than These
                  Unprecedented Times. Right now everything counts as out of the
                  ordinary. There are a number of remarkable things about these
                  lockdown days that are worth photographing now we can remember
                  them when it is all over.
                </p>
                <p>
                  Just because we can't get out and about like we normally
                  would, doesn’t mean we have to taking pictures. There’s still
                  plenty you can do, provided you're prepared to use some
                  imagination. Here are a few ideas to keep you shooting until
                  normal life resumes. Most photographers love to shoot the
                  unusual, and you don’t get much more unusual than These
                  Unprecedented Times. Right now everything counts as out of the
                  ordinary. There are a number of remarkable things about these
                  lockdown days that are worth photographing now we can remember
                  them when it is all over.
                </p>
                
              </div>
            </div>
            <div className="remove-card">
              <span onClick={handleSecondtDiv}>
                <i class="far fa-times-circle"></i>
              </span>
            </div>
          </div>
        )}

        {thirdDiv && (
          <div className="first-div">
            <div className="first-div-container">
              <div className="first-div-inner">
                <img src={ThirdCardPic} alt="test" />
                
                <h1>Motion Graphic Breakdown In Cinema 4D</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ipsum sit nibh amet egestas tellus.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
                <p>
                  Just because we can't get out and about like we normally
                  would, doesn’t mean we have to taking pictures. There’s still
                  plenty you can do, provided you're prepared to use some
                  imagination. Here are a few ideas to keep you shooting until
                  normal life resumes. Most photographers love to shoot the
                  unusual, and you don’t get much more unusual than These
                  Unprecedented Times. Right now everything counts as out of the
                  ordinary. There are a number of remarkable things about these
                  lockdown days that are worth photographing now we can remember
                  them when it is all over.
                </p>
                <p>
                  Just because we can't get out and about like we normally
                  would, doesn’t mean we have to taking pictures. There’s still
                  plenty you can do, provided you're prepared to use some
                  imagination. Here are a few ideas to keep you shooting until
                  normal life resumes. Most photographers love to shoot the
                  unusual, and you don’t get much more unusual than These
                  Unprecedented Times. Right now everything counts as out of the
                  ordinary. There are a number of remarkable things about these
                  lockdown days that are worth photographing now we can remember
                  them when it is all over.
                </p>
                <p>
                  Just because we can't get out and about like we normally
                  would, doesn’t mean we have to taking pictures. There’s still
                  plenty you can do, provided you're prepared to use some
                  imagination. Here are a few ideas to keep you shooting until
                  normal life resumes. Most photographers love to shoot the
                  unusual, and you don’t get much more unusual than These
                  Unprecedented Times. Right now everything counts as out of the
                  ordinary. There are a number of remarkable things about these
                  lockdown days that are worth photographing now we can remember
                  them when it is all over.
                </p>
                
              </div>
            </div>
            <div className="remove-card">
              <span onClick={handleThirdtDiv}>
                <i class="far fa-times-circle"></i>
              </span>
            </div>
          </div>
        )}

        {fourthDiv && (
          <div className="first-div">
            <div className="first-div-container">
              <div className="first-div-inner">
                <img src={FirstCardPic} alt="test" />
                
                <h1>Motion Graphic Breakdown In Cinema 4D</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ipsum sit nibh amet egestas tellus.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
                <p>
                  Just because we can't get out and about like we normally
                  would, doesn’t mean we have to taking pictures. There’s still
                  plenty you can do, provided you're prepared to use some
                  imagination. Here are a few ideas to keep you shooting until
                  normal life resumes. Most photographers love to shoot the
                  unusual, and you don’t get much more unusual than These
                  Unprecedented Times. Right now everything counts as out of the
                  ordinary. There are a number of remarkable things about these
                  lockdown days that are worth photographing now we can remember
                  them when it is all over.
                </p>
                <p>
                  Just because we can't get out and about like we normally
                  would, doesn’t mean we have to taking pictures. There’s still
                  plenty you can do, provided you're prepared to use some
                  imagination. Here are a few ideas to keep you shooting until
                  normal life resumes. Most photographers love to shoot the
                  unusual, and you don’t get much more unusual than These
                  Unprecedented Times. Right now everything counts as out of the
                  ordinary. There are a number of remarkable things about these
                  lockdown days that are worth photographing now we can remember
                  them when it is all over.
                </p>
                <p>
                  Just because we can't get out and about like we normally
                  would, doesn’t mean we have to taking pictures. There’s still
                  plenty you can do, provided you're prepared to use some
                  imagination. Here are a few ideas to keep you shooting until
                  normal life resumes. Most photographers love to shoot the
                  unusual, and you don’t get much more unusual than These
                  Unprecedented Times. Right now everything counts as out of the
                  ordinary. There are a number of remarkable things about these
                  lockdown days that are worth photographing now we can remember
                  them when it is all over.
                </p>
                
              </div>
            </div>
            <div className="remove-card">
              <span onClick={handleFourthDiv}>
                <i class="far fa-times-circle"></i>
              </span>
            </div>
          </div>
        )}



      </div>
    </div>
  );
};

export default Service;
