import React from "react";
import "./Home.css";
import Vijay from "../../img/vijay.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";

function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="home-text">
          <div className="home-title">
            <span className="span1">hey! I am </span>
            <span className="span2">Vijayaragavan</span>
          </div>
          <h1>MERN Stack Developer..</h1>
          <a href="#">
            <button className="home-button button">My RESUME</button>
          </a>
        </div>

        <div className="home-icon">
          <a href="">
            <GitHubIcon />
          </a>
          <a href="">
            <LinkedInIcon />
          </a>
          <a href="">
            <EmailIcon />
          </a>
        </div>
      </div>

      <div className="home-right">
        <img className="vijay" src={Vijay} alt="" />
        <div className="dev">
          <CodeIcon className="code-icon" />
          <h1>Web</h1>
          <h1>Developer</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
