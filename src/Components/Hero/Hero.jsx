import React from "react";
import "./Hero.css";
import profile_img from "../../assets/headshot.jpg";
import resume from "../../assets/DLN-Fall24-Resume.pdf";

function Hero() {
  const openResume = () => {
    window.open(resume);
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-image" />
      <h1>
        <span>I'm Daniel Nguyen,</span> a Juinor at the University of Maryland
        Baltimore County
      </h1>
      <p>I am currently a student pursuing a degree in Information Systems.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <a className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </a>
        </div>
        <div onClick={openResume} className="hero-resume">
          My Resume
        </div>
      </div>
    </div>
  );
}

export default Hero;
