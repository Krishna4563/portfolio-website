import React from "react";

import "./home.css";
import resume from "../../assets/Krishna Keshava Das - RESUME.pdf";

const Home = () => {
  return (
    <section id="home">
      <div className="homeContent">
        <span className="hello">Hello,</span> <br />
        <span className="introduction">
          I'm <span className="myname">Krishna Keshava Das</span>{" "}
        </span>{" "}
        <br />
        <span className="fullstacktextload">Fullstack Developer</span>
        <p className="description">
          I'm proficient in software development, with a strong emphasis on web
          applications using React, Node.js, MongoDB, and Express.js.
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
