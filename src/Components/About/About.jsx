import React from "react";
import "./About.css";
import skills_data from "../../assets/skills_data.js";
import profile_img from "../../assets/me.jpg";
import myskills_data from "../../assets/skills_data.js";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} />
        </div>
        <div className="about-right">
          <div className="about-param">
            <p>
              I am eager to learn the inner workings of the technology that
              surrounds me and contribute to the development of novel ideas and
              solutions.
            </p>
            <p>
              I am especially interested in front-end development and have
              created several projects to explore new skills and concepts.
            </p>
          </div>
          <div className="about-skills">
            {myskills_data.map((skill, index) => {
              return (
                <div className="about-skill">
                  <p>{skill.name}</p>
                  <hr style={{ width: skill.bar_length }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>20+</h1> <p>Frontend Desgin Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6</h1> <p>Programming Languages</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+ Years</h1> <p>Providing Excellent Customer Service</p>
        </div>
      </div>
    </div>
  );
}

export default About;
