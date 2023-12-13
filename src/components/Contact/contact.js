import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import twitterImg from "../../assets/twitter-logo-img.png";
import emailImg from "../../assets/email-logo-2.png";
import linkedinImg from "../../assets/linkedin.png";
import githubImg from "../../assets/github-icon.png";
import phoneImg from "../../assets/phone-logo.png";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    messageSent();
    sendEmail();
    e.target.reset();
  };
  const messageSent = () => {
    window.alert("Successfully Message Sent");
  };

  const form = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_4ryzchs",
        "template_62o789d",
        form.current,
        "xKLXalP0iN79-6cWk"
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
    <section id="contact">
      <div className="contactPage">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please complete the form below to initiate a conversation regarding
          possible employment prospects.
        </span>
        <form className="contactform" ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            className="fullname"
            placeholder="Your Name"
            name="from_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
          ></textarea>{" "}
          <br />
          <button
            type="submit"
            value="Send"
            className="submitbtn"
            onClick={() => alert("Mail Sent Successfully!")}
          >
            Submit
          </button>
        </form>
        <footer className="footer-div">
          <div className="links">
            <a href="mailto:daskrishna0902@gmail.com">
              <img src={emailImg} alt="Email" className="link" />
            </a>

            <a
              href="https://www.linkedin.com/in/krishna-keshava-das-a1588a222/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinImg} alt="LinkdeIn" className="link" />
            </a>

            <a
              href="https://github.com/Krishna4563"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubImg} alt="GitHub" className="link" />
            </a>

            <a
              href="https://twitter.com/daskrishna0902"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterImg} alt="Twitter" className="link" />
            </a>
          </div>
          <div className="mobile-number-div">
            <img src={phoneImg} alt="mobile-number" className="mobile-img" />
            <span className="number">+91&minus;9080344030</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
