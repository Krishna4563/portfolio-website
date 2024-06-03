import React from "react";

import "./home.css";

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
          Experienced frontend developer, proficient in React.js for building
          impactful and user-friendly websites. Skilled in the MERN stack,
          driven by a passion for problem-solving and innovation in a dynamic
          industry
        </p>
        <a
          href="https://drive.google.com/file/d/1AUItCIeCaFeUIKDaykA5h01KrWDaQikt/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
        >
          <button id="downloadButton" className="btn">
            {" "}
            View Resume
          </button>{" "}
        </a>
      </div>
    </section>
  );
};

export default Home;
