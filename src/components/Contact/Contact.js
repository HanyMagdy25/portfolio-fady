import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uumq7io",
        "template_5sja9jb",
        form.current,
        "user_HuxO2V8W4ekcqWb6ASb2r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-container">

        <div className="title-header">
          <h1 className="global-title">Contact Me</h1>
        </div>
        
        <div className="contact-content">
          <div className="contact-left">
            <h3>Contact info</h3>
            <span>
              <i className="fas fa-map-marker-alt"></i> Mansoura, Dakahlia,
              Egypt
            </span>
            <span>
              <i className="fas fa-envelope"></i> fadymounir@gmail.com
            </span>
            <span>
              <i className="fas fa-phone-alt"></i> 201112994482
            </span>
            <span>Follow Me</span>
            <div className="contact-links">
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
          <div className="contact-right">
            <form className="form-all" ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Phone</label>
              <input type="text" name="user_phone" />
              <label>Message</label>
              <textarea name="message" />

              <button className="first-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
