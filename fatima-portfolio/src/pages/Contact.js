import React from "react";
import "../App.css";

function Contact() {
  return (
    <div>
      <h2 className="title">Contact Me ☎️</h2>
      <div className="contact-container">
        <a
          href="https://linkedin.com/in/fatima-b-ahmed/"
          className="contact-button-linkedin"
        >
          <div>LinkedIn</div>
        </a>
        <a
          href="https://github.com/fatimaahmed14"
          className="contact-button-github"
        >
          <div>GitHub</div>
        </a>
        <a
          href="mailto:fxtimaahmed14@gmail.com"
          className="contact-button-email"
        >
          <div>Email</div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
