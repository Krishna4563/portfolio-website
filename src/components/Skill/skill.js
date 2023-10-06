import React from "react";
import "./skill.css";
import htmllogo from "../../assets/html-5.png";
import csslogo from "../../assets/css2.png";
import jslogo from "../../assets/Js-logo.png";
import reactlogo from "../../assets/React2.png";
import nodejslogo from "../../assets/nodejs.png";
import expresslogo from "../../assets/expresslogo.png";
import mongodblogo from "../../assets/mongodb.png";
import gitlogo from "../../assets/git-logo.png";

const Skills = () => {
  return (
    <section id="skillsection">
      <h1>Skills</h1>
      <p className="skillpara">I'm familiar with these technologies</p>
      <div className="imgcontainer">
        <div className="mernlogo">
          <img src={htmllogo} alt="html-icon" className="logoimg" />
        </div>
        <div className="mernlogo">
          <img src={csslogo} alt="html-icon" className="logoimg" />
        </div>
        <div className="mernlogo">
          <img src={jslogo} alt="html-icon" className="logoimg" />
        </div>

        <div className="mernlogo">
          <img src={mongodblogo} alt="html-icon" className="logoimg" />
        </div>
        <div className="mernlogo">
          <img src={expresslogo} alt="html-icon" className="logoimg" />
        </div>
        <div className="mernlogo">
          <img src={reactlogo} alt="html-icon" className="logoimg" />
        </div>

        <div className="mernlogo">
          <img src={nodejslogo} alt="html-icon" className="logoimg" />
        </div>
        <div className="mernlogo">
          <img src={gitlogo} alt="html-icon" className="logoimg" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
