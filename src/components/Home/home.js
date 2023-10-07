import React, { useState, useEffect } from "react";
import "./home.css";
import resume from "../../assets/Krishna Keshava Das - RESUME.pdf";

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let timer;

    const typeText = () => {
      setDisplayText(text.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex <= text.length) {
        timer = setTimeout(typeText, 100);
      } else {
        setIsTyping(false);
        setTimeout(eraseText, 100);
      }
    };

    const eraseText = () => {
      currentIndex--;

      if (currentIndex >= 0) {
        setDisplayText(text.substring(0, currentIndex));
        timer = setTimeout(eraseText, 100);
      } else {
        setIsTyping(true);
        setTimeout(typeText, 100);
      }
    };

    if (isTyping) {
      typeText();
    }

    return () => clearTimeout(timer);
  }, [isTyping, text]);

  return displayText;
};

const Home = () => {
  return (
    <section id="home">
      <div className="homeContent">
        <span className="hello">Hello, I'm</span> <br />
        <span className="introduction">
          {" "}
          <span className="myname">
            <Typewriter text="Krishna Keshava Das" />
          </span>{" "}
        </span>{" "}
        <br />
        <span className="fullstacktextload">Fullstack Developer</span>
        <p className="description">
          I'm proficient in software development, with a strong emphasis on web
          applications using React.js, Node.js, MongoDB, and Express.js.
        </p>
        <a href={resume} download="Krishna Keshava Das">
          <button id="downloadButton" className="btn">
            {" "}
            Download Resume
          </button>{" "}
        </a>
      </div>
    </section>
  );
};

export default Home;
