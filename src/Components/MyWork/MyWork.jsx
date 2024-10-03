import React from "react";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a href={work.w_link} target="_blank">
              <img key={index} src={work.w_img} />
            </a>
          );
        })}
      </div>
      <a
        className="mywork-showmore"
        href="https://github.com/NewGuy250"
        target="_blank"
      >
        <p>GitHub</p>
        <img src={arrow_icon} alt="" />
      </a>
    </div>
  );
}

export default MyWork;
