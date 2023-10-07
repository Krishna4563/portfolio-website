import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import githubImg from "../../assets/github-icon.png";
import menu from "../../assets/menulogo5.png";

const Navbar = () => {
  const [showmenu, setshowmenu] = useState(false);
  return (
    <nav className="navbar">
      <a href="#home">
        <p className="name-logo-text">&lt;KRISHNA /&gt;</p>
      </a>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skillsection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projectsection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="desktopMenuListItem"
        >
          Contact Me
        </Link>
      </div>
      <a href="https://github.com/Krishna4563" target="_blank" rel="noreferrer">
        <button className="github-btn">
          <img src={githubImg} alt="" className="github-img" />
          GitHub
        </button>
      </a>

      <img
        src={menu}
        alt="Menu"
        className="mobilemenu"
        onClick={() => setshowmenu(!showmenu)}
      />
      <div className="navmenu" style={{ display: showmenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
          className="listitem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listitem"
          onClick={() => {
            setshowmenu(false);
          }}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skillsection"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listitem"
          onClick={() => {
            setshowmenu(false);
          }}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projectsection"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listitem"
          onClick={() => {
            setshowmenu(false);
          }}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listitem"
          onClick={() => {
            setshowmenu(false);
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
