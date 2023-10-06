import React from "react";
import "./projects.css";
import project1 from "../../assets/weather-app-img.png";
import project2 from "../../assets/todo-app-img.png";
import project3 from "../../assets/portfolio-img.png";

const Project = () => {
  return (
    <section id="projectsection">
      <h1 className="prh1">Projects</h1>
      <div className="prcontainer">
        <div className="container">
          <img src={project1} alt="project1img" className="projectImg" />
          <p className="prpara">Weather Forecast Application</p>
          <div className="demogit">
            <a
              href="https://weather-app-react-jade-psi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo">Demo</button>
            </a>
            <a
              href="https://github.com/Krishna4563/weather-app-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github">GitHub</button>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={project2} alt="project1img" className="projectImg" />
          <p className="prpara">To-Do Application</p>
          <div className="demogit">
            <a
              href="https://mern-todo-app-client-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo">Demo</button>
            </a>
            <a
              href="https://github.com/Krishna4563/mern-todo-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github">GitHub</button>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={project3} alt="project1img" className="projectImg" />
          <p className="prpara">Portfolio Website</p>
          <div className="demogit">
            {/* <button className="demo blockbtn">Demo</button> */}
            <a
              href="https://github.com/MADHANRAJ-R/Portfolio-Website.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
