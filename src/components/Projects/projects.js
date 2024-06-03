import React from "react";
import "./projects.css";
import project1 from "../../assets/weather-app-img.png";
import project2 from "../../assets/todo-app-img.png";
import project3 from "../../assets/portfolio-img.png";
import project4 from "../../assets/netflix-app-img.png";
import project5 from "../../assets/qr-app-img.png";
import project6 from "../../assets/movie-app-img.png";
import project7 from "../../assets/aws-app-img.png";
import project8 from "../../assets/book-app-img.png";
import project9 from "../../assets/candidate-job-platform-img.png";
import blackImg from "../../assets/black-img.jpg";

const Project = () => {
  return (
    <section id="projectsection">
      <h1 className="prh1">Projects</h1>
      <div className="prcontainer">
        <div className="container">
          <img src={project7} alt="project2img" className="projectImg" />
          <p className="prpara">AWS DNS Management Dashboard Application</p>
          <div className="demogit">
            <a
              href="https://aws-dns-dashboard.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo">Demo</button>
            </a>
            <a
              href="https://github.com/Krishna4563/aws-dns-dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github">GitHub</button>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={project6} alt="project2img" className="projectImg" />
          <p className="prpara">Movie Library Application</p>
          <div className="demogit">
            <a
              href="https://movie-hub-client.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo">Demo</button>
            </a>
            <a
              href="https://github.com/Krishna4563/movie-hub-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github">GitHub</button>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={project5} alt="project2img" className="projectImg" />
          <p className="prpara">QR-Code Generator Application</p>
          <div className="demogit">
            <a
              href="https://qr-code-app-five.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo">Demo</button>
            </a>
            <a
              href="https://github.com/Krishna4563/qr-code-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github">GitHub</button>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={project9} alt="project2img" className="projectImg" />
          <p className="prpara">Job Search Platform Application</p>
          <div className="demogit">
            <a
              href="https://candidate-application-platform-chi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo">Demo</button>
            </a>
            <a
              href="https://github.com/Krishna4563/weekday-assignment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github">GitHub</button>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={blackImg} alt="project2img" className="projectImg" />
          <p className="prpara">Course Selling App (Backend)</p>
          <div className="demogit">
            {/* <a
              href="https://qr-code-app-five.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo">Demo</button>
            </a> */}
            <a
              href="https://github.com/Krishna4563/course-selling-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github">GitHub</button>
            </a>
          </div>
        </div>
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
          <img src={project8} alt="project2img" className="projectImg" />
          <p className="prpara">Book Library Application</p>
          <div className="demogit">
            <a
              href="https://book-data-dashboard.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo">Demo</button>
            </a>
            <a
              href="https://github.com/Krishna4563/nua-assignment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github">GitHub</button>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={project2} alt="project2img" className="projectImg" />
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
          <img src={project4} alt="project4img" className="projectImg" />
          <p className="prpara">Netflix Clone</p>
          <div className="demogit">
            <a
              href="https://netflix-clone-omega-plum.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo">Demo</button>
            </a>
            <a
              href="https://github.com/Krishna4563/Netflix-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github">GitHub</button>
            </a>
          </div>
        </div>
        <div className="container">
          <img src={project3} alt="project3img" className="projectImg" />
          <p className="prpara">Portfolio Website</p>
          <div className="demogit">
            {/* <button className="demo blockbtn">Demo</button> */}
            <a
              href="https://github.com/Krishna4563/portfolio-website"
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
