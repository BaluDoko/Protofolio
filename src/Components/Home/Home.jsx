import React from "react";
import "./Home.css";
import Vijay from "../../img/vijay.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";

function Home() {
  return (
    <div id="mainhome" className="home">
      <div className="home-left">
        <div className="home-text">
          <div className="home-title">
            <span className="span1">hey! I am </span>
            <span className="span2">Mahendra</span>
          </div>
          <h1>MERN Stack Developer..</h1>
          <a href="https://drive.google.com/file/d/1nEWXvbhkau4VHvuzaRiGpF4ZlmLO42sf/view?usp=sharing">
            <button className="home-button button">My RESUME</button>
          </a>
        </div>

        <div className="home-icon">
          <a href="https://github.com/Balu667">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/mahendra-balreddy-b024591a2/">
            <LinkedInIcon />
          </a>
          <a href="mailto:balreddymahendra7@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>

      <div className="home-right">
        <img className="vijay" src={"https://media.licdn.com/dms/image/D5603AQGxonUZ8JaXGw/profile-displayphoto-shrink_800_800/0/1691868620371?e=1727308800&v=beta&t=CA88uXvlCLmJmlH3JO56pb9HvqjE-C-atMOufKO_ptE"} alt="" />
        <div className="dev">
          <CodeIcon className="code-icon" />
          <h1>FullStack</h1>
          <h1>Web Developer</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
